import {createSelector} from 'reselect';

const archetype = state => state.archetype;
const archetypes = state => state.archetypes;
const archetypeSpecialSkills = state => state.archetypeSpecialSkills;
const archetypeTalents = state => state.archetypeTalents;
const armor = state => state.armor;
const career = state => state.career;
const careers = state => state.careers;
const careerSkillsRank = state => state.careerSkillsRank;
const creationCharacteristics = state => state.creationCharacteristics;
const earnedXP = state => state.earnedXP;
const gear = state => state.gear;
const masterSkills = state => state.masterSkills;
const masterTalents = state => state.masterTalents;
const qualities = state => state.qualities;
const skills = state => state.skills;
const talentModifiers = state => state.talentModifiers;
const talents = state => state.talents;
const weapons = state => state.weapons;

export const calcCharacteristics = createSelector(
    archetype, archetypes, creationCharacteristics, talentModifiers,
    (archetype, archetypes, creationCharacteristics, talentModifiers) => {
        if (!archetype || !archetypes[archetype]) return creationCharacteristics;
        //get the starting characteristics
        let characteristics = {...archetypes[archetype].characteristics};
        //add the creation characteristics
        Object.keys(characteristics).forEach((characteristic) => {
            characteristics[characteristic] += creationCharacteristics[characteristic];
        });
        //add dedications talents
        Object.values(talentModifiers.Dedication).forEach((characteristic) => {
            characteristics[characteristic]++;
        });
        return characteristics;
    }
);

export const calcArchetypeSkillRank = createSelector(
    archetype, archetypes, archetypeTalents, skills, archetypeSpecialSkills,
    (archetype, archetypes, archetypeTalents, skills, archetypeSpecialSkills) => {
        if (!archetype || !archetypes[archetype]) return archetypeSpecialSkills;
        let archetypeSkillRank = {...archetypeSpecialSkills};
        //add any starting skills based on archetype skills
        Object.keys(archetypes[archetype].skills).forEach(key => {
            if (Object.keys(skills).includes(key)) archetypeSkillRank[key] = {rank: archetypes[archetype].skills[key]};
        });
        //add any starting skills based on archetype talents
        if (archetypes[archetype].talents) {
            archetypes[archetype].talents.forEach(talent => {
                if (archetypeTalents[talent]) {
                    if (archetypeTalents[talent].modifier) {
                        Object.keys(archetypeTalents[talent].modifier).forEach(key => {
                            if (Object.keys(skills).includes(key) && Number.isInteger(archetypeTalents[talent].modifier[key])) {
                                archetypeSkillRank[key] = {rank: archetypeTalents[talent].modifier[key]};
                            }
                        })
                    }
                }
            });
        }
        return archetypeSkillRank;
    }
);

export const calcSkillRanks = createSelector(
    masterSkills, skills, careerSkillsRank, calcArchetypeSkillRank,
    (masterSkills, skills, careerSkillsRank, archetypeSkillRank) => {
        let skillRanks = {};
        Object.keys(skills).forEach(key => {
            skillRanks[key] = (
                    masterSkills[key] ? ((masterSkills[key].rank ? masterSkills[key].rank : 0) +
                        (masterSkills[key].careerRank ? masterSkills[key].careerRank : 0)) : 0) +
                (careerSkillsRank.includes(key) ? 1 : 0) +
                (Object.keys(archetypeSkillRank).includes(key) ? archetypeSkillRank[key].rank : 0);
        });
        return skillRanks;
    }
);

export const calcTalentCount = createSelector(
    masterTalents,
    (masterTalents) => {
        let count = {};
        Object.keys(masterTalents).forEach((row) => {
            Object.keys(masterTalents[row]).forEach((tier) => {
                let talent = masterTalents[row][tier];
                if (talent !== '') count[talent] = count[talent] ? count[talent] + 1 : 1;
            })
        });
        return count;
    }
);

export const calcSkillDice = createSelector(
    calcCharacteristics, calcSkillRanks, skills, talents, calcTalentCount, archetype, archetypes, archetypeTalents,
    (characteristics, skillRanks, skills, talents, talentCount, archetype, archetypes, archetypeTalents) => {
        if (!characteristics) return '';
        let skillDice = {};
        Object.keys(skills).forEach(key => {
            let characteristic = characteristics[skills[key].characteristic];
            let rank = skillRanks[key];
            let dice, upgrade = 0;
            let text = '';
            if (characteristic >= rank) {
                dice = characteristic;
                upgrade = characteristic - rank;
            } else {
                dice = rank;
                upgrade = rank - characteristic;
            }
            for (let i = dice; i > 0; i--) {
                if (i > upgrade) text += '[yellow] ';
                else text += '[green] ';
            }

            //get any dice from talents
            Object.keys(talentCount).forEach(talent => {
                if (talents[talent]) {
                    if (talents[talent].modifier) {
                        if (talents[talent].modifier[key]) {
                            for (let j = 0; j < talentCount[talent]; j++) {
                                text += talents[talent].modifier[key] + ' ';
                            }
                        }
                    }
                }
            });

            //get dice from archetype talents
            if (archetypes[archetype]) {
                if (archetypes[archetype].talents) {
                    archetypes[archetype].talents.forEach(key2 => {
                        if (archetypeTalents[key2].modifier) {
                            if (archetypeTalents[key2].modifier[key] && !Number.isInteger(archetypeTalents[key2].modifier[key])) text += archetypeTalents[key2].modifier[key] + ' ';
                        }
                    });
                }
            }
            skillDice[key] = text;
        });
        return skillDice;
    }
);

export const calcGearDice = createSelector(
    calcSkillDice, weapons, armor, gear, qualities,
    (skillDice, weapons, armor, gear, qualities) => {
        let gearDice = {};
        ['armor', 'weapons', 'gear'].forEach((type) => {
            let data;
            if (type === 'armor') data = {...armor};
            if (type === 'weapons') data = {...weapons};
            if (type === 'gear') data = {...gear};
            if (!gearDice[type]) gearDice[type] = {};
            Object.keys(data).forEach((item) => {
                let qualityDice = [];
                if (data[item]) {
                    if (data[item].qualitiesList) {
                        data[item].qualitiesList.forEach((qualityData) => {
                            let quality = Object.keys(qualityData)[0];
                            let rank = Object.values(qualityData)[0] === '' ? 1 : Object.values(qualityData)[0];
                            if (qualities[quality].modifier) {
                                if (qualities[quality].modifier.check) {
                                    for (let i = 0; i < rank; i++) {
                                        qualityDice.push(qualities[quality].modifier.check);
                                    }
                                }
                            }
                        });
                    }
                }
                gearDice[type][item] = skillDice[data[item].skill] + qualityDice.map((die) => `${die}`).sort((a, b) => {
                    if (a.length < b.length) return -1;
                    if (a.length > b.length) return 1;
                    return 0;
                }).join(' ');
            })
        });
        return gearDice;
    }
);

export const calcMaxCareerSkills = createSelector(
    archetype, archetypes,
    (archetype, archetypes) => {
        if (!archetype || !archetypes[archetype]) return 4;
        const archetypeSkills = archetypes[archetype].skills;
        return Object.keys(archetypeSkills).includes('careerSkills') ? 6 : 4;
    }
);

export const calcCareerCheck = createSelector(
    archetype, archetypes, archetypeTalents, skills, career, careers, talents, calcTalentCount,
    (archetype, archetypes, archetypeTalents, skills, career, careers, talents, talentCount) => {
        let careerSkillsList = {};
        Object.keys(skills).forEach(skill => {
            careerSkillsList[skill] = false;
            if (careers[career]) {
                if (careers[career].skills.includes(skill)) careerSkillsList[skill] = true;
                else {
                    Object.keys(talentCount).forEach(talent => {
                        if (talents[talent]) {
                            if (talents[talent].modifier) {
                                if (talents[talent].modifier.careerSkills) {
                                    if (talents[talent].modifier.careerSkills.includes(skill)) careerSkillsList[skill] = true;
                                }
                            }
                        }
                    });
                }
            }
            if (archetypes[archetype]) {
                if (archetypes[archetype].talents) {
                    archetypes[archetype].talents.forEach(talent => {
                        if (archetypeTalents[talent]) {
                            if (archetypeTalents[talent].modifier) {
                                if (archetypeTalents[talent].modifier.careerSkills) {
                                    if (archetypeTalents[talent].modifier.careerSkills.includes(skill)) careerSkillsList[skill] = true;
                                }
                            }
                        }
                    });
                }
            }
        });
        return careerSkillsList;
    }
);

export const calcWounds = createSelector(
    archetype, archetypes, talents, creationCharacteristics, calcTalentCount,
    (archetype, archetypes, talents, creationCharacteristics, talentCount) => {
        if (!archetype || !archetypes[archetype]) return 0;
        //get starting wounds
        let startingThreshold = archetypes[archetype].woundThreshold;
        //get starting brawn
        let startingBrawn = archetypes[archetype].characteristics.Brawn;
        //get brawn added via creation
        let creationBrawn = creationCharacteristics.Brawn;
        //get wound modifier from talentModifier
        let talentModifier = 0;
        Object.keys(talentCount).forEach((talent) => {
            if (talents[talent]) {
                if (talents[talent].modifier) talentModifier += ((talents[talent].modifier.woundThreshold ? talents[talent].modifier.woundThreshold : 0) * talentCount[talent]);
            }
        });
        return startingThreshold + startingBrawn + creationBrawn + talentModifier;
    }
);

export const calcStrain = createSelector(
    archetype, archetypes, talents, creationCharacteristics, calcTalentCount,
    (archetype, archetypes, talents, creationCharacteristics, talentCount) => {
        if (!archetype || !archetypes[archetype]) return 0;
        //get starting wounds
        let startingThreshold = archetypes[archetype].strainThreshold;
        //get starting brawn
        let startingBrawn = archetypes[archetype].characteristics.Willpower;
        //get brawn added via creation
        let creationBrawn = creationCharacteristics.Willpower;
        //get wound modifier from talentModifier
        let talentModifier = 0;
        Object.keys(talentCount).forEach((talent) => {
            if (talents[talent]) {
                if (talents[talent].modifier) talentModifier += ((talents[talent].modifier.strainThreshold ? talents[talent].modifier.strainThreshold : 0) * talentCount[talent]);
            }
        });
        return startingThreshold + startingBrawn + creationBrawn + talentModifier;
    }
);

export const calcTotalSoak = createSelector(
    archetype, archetypes, talents, calcCharacteristics, calcTalentCount, armor,
    (archetype, archetypes, talents, characteristics, talentCount, armor) => {
        if (!archetype || !archetypes[archetype]) return 0;
        //get calcBrawn
        let Brawn = characteristics.Brawn;
        //get soak from armor
        let Armor = 0;
        Object.keys(armor).forEach((key) => {
            if (armor[key].equipped) Armor += armor[key].soak ? +armor[key].soak : 0;
        });
        //get soak from Enduring Talent
        let talentModifier = 0;
        Object.keys(talentCount).forEach((talent) => {
            if (talents[talent]) {
                if (talents[talent].modifier) talentModifier += ((talents[talent].modifier.soak ? talents[talent].modifier.soak : 0) * talentCount[talent]);
            }
        });
        return Brawn + Armor + talentModifier;
    }
);

export const calcTotalDefense = createSelector(
    armor, weapons, gear, qualities, archetype, archetypes, archetypeTalents, talents, calcTalentCount,
    (armor, weapons, gear, qualities, archetype, archetypes, archetypeTalents, talents, talentCount) => {
        let defense = {melee: 0, ranged: 0};

        //get defense from Archetype
        if (archetypes[archetype]) {
            if (archetypes[archetype].talents) {
                archetypes[archetype].talents.forEach(key => {
                    if (archetypeTalents[key].modifier) {
                        let target = {...archetypeTalents[key].modifier};
                        defense.melee += (target.meleeDefense ? +target.meleeDefense : 0) + (target.defense ? +target.defense : 0);
                        defense.ranged += (target.rangedDefense ? +target.rangedDefense : 0) + (target.defense ? +target.defense : 0);
                    }
                });
            }
        }

        //get defense from Armor
        Object.keys(armor).forEach((key) => {
            if (armor[key].equipped) {
                defense.melee += (armor[key].meleeDefense ? +armor[key].meleeDefense : 0) + (armor[key].defense ? +armor[key].defense : 0);
                defense.ranged += (armor[key].rangedDefense ? +armor[key].rangedDefense : 0) + (armor[key].defense ? +armor[key].defense : 0);
            }
        });

        //get defense from talents
        Object.keys(talentCount).forEach((talent) => {
            if (talents[talent]) {
                if (talents[talent].modifier) {
                    defense.melee += ((talents[talent].modifier.meleeDefense ? +talents[talent].modifier.meleeDefense : 0) + (talents[talent].modifier.defense ? +talents[talent].modifier.defense : 0) * talentCount[talent]);
                    defense.ranged += ((talents[talent].modifier.rangedDefense ? +talents[talent].modifier.rangedDefense : 0) + (talents[talent].modifier.defense ? +talents[talent].modifier.defense : 0) * talentCount[talent]);
                }
            }
        });

        //get defense from gear
        ['armor', 'weapons', 'gear'].forEach((type) => {
            let data;
            if (type === 'armor') data = {...armor};
            if (type === 'weapons') data = {...weapons};
            if (type === 'gear') data = {...gear};
            Object.keys(data).forEach((item) => {
                if (data[item].qualitiesList) {
                    data[item].qualitiesList.forEach((qualityData) => {
                        let quality = Object.keys(qualityData)[0];
                        let rank = Object.values(qualityData)[0] === '' ? 1 : Object.values(qualityData)[0];
                        if (qualities[quality].modifier) {
                            if (qualities[quality].modifier.meleeDefense) defense.melee += +qualities[quality].modifier.meleeDefense * rank;
                            if (qualities[quality].modifier.rangedDefense) defense.ranged += +qualities[quality].modifier.rangedDefense * rank;
                        }
                    });
                }
            })
        });

        return defense;
    }
);

export const calcEncumbranceLimit = createSelector(
    calcCharacteristics,
    (characteristics) => {
        let Brawn = characteristics.Brawn;
        return Brawn + 5;
    }
);

export const calcTotalEncumbrance = createSelector(
    armor, weapons, gear,
    (armor, weapons, gear) => {
        let encumbrance = 0;
        //get weapon encumbrance
        Object.keys(weapons).forEach((item) => {
            if (weapons[item].carried) encumbrance += weapons[item].encumbrance ? +weapons[item].encumbrance : 0;
        });
        //get armor encumbrance
        Object.keys(armor).forEach((item) => {
            let armorEncum = +armor[item].encumbrance - (armor[item].equipped ? 3 : 0);
            if (armorEncum < 0 || !armorEncum) armorEncum = 0;
            if (armor[item].carried) encumbrance += armorEncum;
        });
        //get gear encumbrance
        Object.keys(gear).forEach((item) => {
            if (gear[item].carried) encumbrance += ((gear[item].encumbrance ? +gear[item].encumbrance : 0) * (gear[item].amount ? +gear[item].amount : 1));
        });
        return encumbrance;
    }
);


export const calcUsedXP = createSelector(
    masterTalents, creationCharacteristics, archetype, archetypes, masterSkills, career, careers, careerSkillsRank, calcArchetypeSkillRank, calcSkillRanks,
    (masterTalents, creationCharacteristics, archetype, archetypes, masterSkills, career, careers, careerSkillsRank, archetypeSkillRank, skillRanks) => {
        if (!archetype || !archetypes[archetype]) return 0;
        //talent XP
        let talentXP = 0;
        Object.keys(masterTalents).forEach((row) => {
            Object.keys(masterTalents[row]).forEach((tier) => {
                if (masterTalents[row][tier] !== '') talentXP = talentXP + (5 * tier);
            })
        });
        //skillXP
        let skillXP = 0;
        Object.keys(masterSkills).forEach((skill) => {
            let rank = skillRanks[skill];

            for (let i = (careerSkillsRank.includes(skill) ? 1 : 0) + (archetypeSkillRank[skill] ? archetypeSkillRank[skill].rank : 0); rank > i; i++) {
                skillXP += (i + 1) * 5;
            }
            if (masterSkills[skill].rank) skillXP += masterSkills[skill].rank * 5;
        });

        //characteristicXP
        let characteristicXP = 0;
        //starting characteristics
        Object.keys(creationCharacteristics).forEach((characteristic) => {
            let points = creationCharacteristics[characteristic];
            for (let i = 0; points > i; i++) {
                characteristicXP += (archetypes[archetype].characteristics[characteristic] + i + 1) * 10;
            }
        });

        return talentXP + skillXP + characteristicXP;
    }
);

export const calcTotalXP = createSelector(
    archetype, archetypes, earnedXP,
    (archetype, archetypes, earnedXP) => {
        if (!archetype || !archetypes[archetype]) return earnedXP;
        return +archetypes[archetype].experience + +earnedXP;
    }
);


import {combineReducers} from 'redux';
import * as criticals from './criticals';
import * as derivedStats from './derivedStats';
import * as changeState from './changeState';

const allReducers = combineReducers({
    archetype: changeState.archetype,
    archetypes: changeState.archetypes,
    archetypeSpecialSkills: changeState.archetypeSpecialSkills,
    archetypeTalents: changeState.archetypeTalents,
    armor: changeState.armor,
    career: changeState.career,
    careers: changeState.careers,
    careerSkillsRank: changeState.careerSkillsRank,
    character: changeState.character,
    characterList: changeState.characterList,
    creationCharacteristics: changeState.creationCharacteristics,
    critical: changeState.critical,
    currentStrain: changeState.currentStrain,
    currentWound: changeState.currentWound,
    customArchetypes: changeState.customArchetypes,
    customCareers: changeState.customCareers,
    customDataList: changeState.customDataList,
    customDataSet: changeState.customDataSet,
    customMotivations: changeState.customMotivations,
    customSkills: changeState.customSkills,
    customTalents: changeState.customTalents,
    description: changeState.description,
    earnedXP: changeState.earnedXP,
    gear: changeState.gear,
    loadingCustomData: changeState.loadingCustomData,
    loadingData: changeState.loadingData,
    masterMotivations: changeState.masterMotivations,
    masterSkills: changeState.masterSkills,
    masterTalents: changeState.masterTalents,
    misc: changeState.misc,
    money: changeState.money,
    motivations: changeState.motivations,
    printContent: changeState.printContent,
    qualities: changeState.qualities,
    skills: changeState.skills,
    talentModifiers: changeState.talentModifiers,
    talents: changeState.talents,
    user: changeState.user,
    weapons: changeState.weapons,

});

export const archetypeSkillRank = (state) => derivedStats.calcArchetypeSkillRank(state);
export const careerCheck = (state) => derivedStats.calcCareerCheck(state);
export const characteristics = (state) => derivedStats.calcCharacteristics(state);
export const criticalText = (state) => criticals.criticalText(state);
export const encumbranceLimit = (state) => derivedStats.calcEncumbranceLimit(state);
export const gearDice = (state) => derivedStats.calcGearDice(state);
export const maxCareerSkills = (state) => derivedStats.calcMaxCareerSkills(state);
export const skillDice = (state) => derivedStats.calcSkillDice(state);
export const skillRanks = (state) => derivedStats.calcSkillRanks(state);
export const strainThreshold = (state) => derivedStats.calcStrain(state);
export const talentCount = (state) => derivedStats.calcTalentCount(state);
export const totalDefense = (state) => derivedStats.calcTotalDefense(state);
export const totalEncumbrance = (state) => derivedStats.calcTotalEncumbrance(state);
export const totalSoak = (state) => derivedStats.calcTotalSoak(state);
export const totalXP = (state) => derivedStats.calcTotalXP(state);
export const usedXP = (state) => derivedStats.calcUsedXP(state);
export const woundThreshold = (state) => derivedStats.calcWounds(state);


export default allReducers;

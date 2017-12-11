const talents = {
  BoughtInfo: {
    name: 'Bought Info',
    setting: 'All',
    tier: 1,
    activation: true,
    turn: 'Action',
    ranked: false,
    description: 'See CRB, page 72, for more details.'
  },
  CleverRetort: {
    name: 'Clever Retort',
    setting: 'All',
    tier: 1,
    activation: true,
    turn: 'Incidental, Out of Turn',
    ranked: false,
    description: 'See CRB, page 73, for more details.'
  },
  DefensiveSysops: {
    name: 'Defensive Sysops',
    setting: 'Modern Day, Science Fiction, Space Opera',
    tier: 1,
    activation: false,
    turn: '',
    ranked: false,
    description: 'See CRB, page 73, for more details.'
  },
  DesperateRecovery: {
    name: 'Desperate Recovery',
    setting: 'All',
    tier: 1,
    activation: false,
    turn: '',
    ranked: false,
    description: 'See CRB, page 73, for more details.'
  },
  Duelist: {
    name: 'Duelist',
    setting: 'All',
    tier: 1,
    activation: false,
    turn: '',
    ranked: false,
    description: 'See CRB, page 73, for more details.'
  },
  Durable: {
    name: 'Durable',
    setting: 'All',
    tier: 1,
    activation: false,
    turn: '',
    ranked: true,
    description: 'See CRB, page 73, for more details.'
  },
  Forager: {
    name: 'Forager',
    setting: 'All',
    tier: 1,
    activation: false,
    turn: '',
    ranked: false,
    description: 'See CRB, page 73, for more details.'
  },
  Grit: {
    name: 'Grit',
    setting: 'All',
    tier: 1,
    activation: false,
    turn: '',
    ranked: true,
    description: 'See CRB, page 73, for more details.'
  },
  HamstringShot: {
    name: 'Hamstring Shot',
    setting: 'All',
    tier: 1,
    activation: true,
    turn: 'Action',
    ranked: false,
    description: 'See CRB, page 73, for more details.'
  },
  JumpUp: {
    name: 'Jump Up',
    setting: 'All',
    tier: 1,
    activation: true,
    turn: 'Incidental',
    ranked: false,
    description: 'See CRB, page 73, for more details.'
  },
  KnackForIt: {
    name: 'Knack For It',
    setting: 'All',
    tier: 1,
    activation: false,
    turn: '',
    ranked: true,
    description: 'See CRB, page 73, for more details.'
  },
  KnowSomebody: {
    name: 'Know Somebody',
    setting: 'All',
    tier: 1,
    activation: true,
    turn: 'Incidental',
    ranked: true,
    description: 'See CRB, page 74, for more details.'
  },
  LetsRide: {
    name: 'Let\'s Ride',
    setting: 'All',
    tier: 1,
    activation: true,
    turn: 'Incidental',
    ranked: false,
    description: 'See CRB, page 74, for more details.'
  },
  OneWithNature: {
    name: 'One With Nature',
    setting: 'All',
    tier: 1,
    activation: true,
    turn: 'Incidental',
    ranked: false,
    description: 'See CRB, page 74, for more details.'
  },
  Parry: {
    name: 'Parry',
    setting: 'All',
    tier: 1,
    activation: true,
    turn: 'Incidental, Out of Turn',
    ranked: true,
    description: 'See CRB, page 74, for more details.'
  },
  ProperUpbringing: {
    name: 'Proper Upbringing',
    setting: 'All',
    tier: 1,
    activation: true,
    turn: 'Incidental',
    ranked: true,
    description: 'See CRB, page 74, for more details.'
  },
  Quickdraw: {
    name: 'Quick Draw',
    setting: 'All',
    tier: 1,
    activation: true,
    turn: 'Incidental',
    ranked: false,
    description: 'See CRB, page 74, for more details.'
  },
  QuickStrike: {
    name: 'Quick Strike',
    setting: 'All',
    tier: 1,
    activation: false,
    turn: '',
    ranked: true,
    description: 'See CRB, page 74, for more details.'
  },
  RapidReaction: {
    name: 'Rapid Reaction',
    setting: 'All',
    tier: 1,
    activation: true,
    turn: 'Incidental, Out if Turn',
    ranked: true,
    description: 'See CRB, page 74, for more details.'
  },
  SecondWind: {
    name: 'Second Wind',
    setting: 'All',
    tier: 1,
    activation: true,
    turn: 'Incidental',
    ranked: true,
    description: 'See CRB, page 74, for more details.'
  },
  Surgeon: {
    name: 'Surgeon',
    setting: 'All',
    tier: 1,
    activation: false,
    turn: '',
    ranked: true,
    description: 'See CRB, page 74, for more details.'
  },
  Swift: {
    name: 'Swift',
    setting: 'All',
    tier: 1,
    activation: false,
    turn: '',
    ranked: false,
    description: 'See CRB, page 75, for more details.'
  },
  Toughened: {
    name: 'Toughened',
    setting: 'All',
    tier: 1,
    activation: false,
    turn: '',
    ranked: true,
    description: 'See CRB, page 75, for more details.'
  },
  Unremarkable: {
    name: 'Unremarkable',
    setting: 'All',
    tier: 1,
    activation: false,
    turn: '',
    ranked: false,
    description: 'See CRB, page 75, for more details.'
  },
  BasicMilitaryTraining: {
    name: 'Basic Military Training',
    setting: 'Weird War',
    tier: 2,
    activation: false,
    turn: '',
    ranked: false,
    description: 'See CRB, page 75, for more details.'
  },
  Berserk: {
    name: 'Berserk',
    setting: 'Fantasy, Weird War',
    tier: 2,
    activation: true,
    turn: 'Maneuver',
    ranked: false,
    description: 'See CRB, page 75, for more details.'
  },
  CoordinatedAssault: {
    name: 'Coordinated Assault',
    setting: 'All',
    tier: 2,
    activation: true,
    turn: 'Maneuver',
    ranked: true,
    description: 'See CRB, page 75, for more details.'
  },
  Counteroffer: {
    name: 'Counteroffer',
    setting: 'All',
    tier: 2,
    activation: true,
    turn: 'Action',
    ranked: false,
    description: 'See CRB, page 75, for more details.'
  },
  DaringAviator: {
    name: 'Daring Aviator',
    setting: 'Steampunk, Weird War, Modern Day, Science Fiction, Space Opera',
    tier: 2,
    activation: true,
    turn: 'Incidental',
    ranked: true,
    description: 'See CRB, page 75, for more details.'
  },
  DefensiveStance: {
    name: 'Defensive Stance',
    setting: 'All',
    tier: 2,
    activation: true,
    turn: 'Maneuver',
    ranked: true,
    description: 'See CRB, page 75, for more details.'
  },
  DefensiveSysopsImproved: {
    name: 'Defensive Sysops (Improved)',
    setting: 'Modern Day, Science Fiction, Space Opera',
    tier: 2,
    activation: true,
    turn: 'Incidental',
    ranked: false,
    description: 'See CRB, page 76, for more details.'
  },
  DualWielder: {
    name: 'Dual Wielder',
    setting: 'All',
    tier: 2,
    activation: true,
    turn: 'Maneuver',
    ranked: false,
    description: 'See CRB, page 76, for more details.'
  },
  FanTheHammer: {
    name: 'Fan The Hammer',
    setting: 'Steampunk, Weird War, Modern Day',
    tier: 2,
    activation: true,
    turn: 'Incidental',
    ranked: false,
    description: 'See CRB, page 76, for more details.'
  },
  HeightenedAwareness: {
    name: 'Heightened Awareness',
    setting: 'All',
    tier: 2,
    activation: false,
    turn: '',
    ranked: false,
    description: 'See CRB, page 76, for more details.'
  },
  InspiringRhetoric: {
    name: 'Inspiring Rhetoric',
    setting: 'All',
    tier: 2,
    activation: true,
    turn: 'Action',
    ranked: false,
    description: 'See CRB, page 76, for more details.'
  },
  Inventor: {
    name: 'Inventor',
    setting: 'All',
    tier: 2,
    activation: true,
    turn: 'Incidental',
    ranked: true,
    description: 'See CRB, page 76, for more details.'
  },
  LuckyStrike: {
    name: 'Lucky Strike',
    setting: 'All',
    tier: 2,
    activation: true,
    turn: 'Incidental',
    ranked: false,
    description: 'See CRB, page 76, for more details.'
  },
  ScathingTirade: {
    name: 'Scathing Tirade',
    setting: 'All',
    tier: 2,
    activation: true,
    turn: 'Action',
    ranked: false,
    description: 'See CRB, page 77, for more details.'
  },
  SideStep: {
    name: 'Side Step',
    setting: 'All',
    tier: 2,
    activation: true,
    turn: 'Action',
    ranked: true,
    description: 'See CRB, page 77, for more details.'
  },
  AnimalCompanion: {
    name: 'Animal Companion',
    setting: 'All',
    tier: 3,
    activation: false,
    turn: '',
    ranked: true,
    description: 'See CRB, page 77, for more details.'
  },
  BarrellRoll: {
    name: 'Barrell Roll',
    setting: 'Steampunk, Weird War, Modern Day, Science Fiction, Space Opera',
    tier: 3,
    activation: true,
    turn: 'Incidental, Out of Turn',
    ranked: false,
    description: 'See CRB, page 77, for more details.'
  },
  DistintiveStyle: {
    name: 'Distintive Style',
    setting: 'Modern Day, Science Fiction, Space Opera',
    tier: 3,
    activation: true,
    turn: 'Incidental',
    ranked: false,
    description: 'See CRB, page 78, for more details.'
  },
  Dodge: {
    name: 'Dodge',
    setting: 'All',
    tier: 3,
    activation: true,
    turn: 'Incidental, Out of Turn',
    ranked: true,
    description: 'See CRB, page 78, for more details.'
  },
  EagleEyes: {
    name: 'Eagle Eyes',
    setting: 'All',
    tier: 3,
    activation: true,
    turn: 'Action',
    ranked: false,
    description: 'See CRB, page 78, for more details.'
  },
  FieldCommander: {
    name: 'Field Commander',
    setting: 'All',
    tier: 3,
    activation: true,
    turn: 'Action',
    ranked: false,
    description: 'See CRB, page 78, for more details.'
  },
  ForgotToCount: {
    name: 'Forgot To Count?',
    setting: 'Steampunk, Weird War, Modern Day, Science Fiction, Space Opera',
    tier: 3,
    activation: true,
    turn: 'Incidental, Out of Turn',
    ranked: false,
    description: 'See CRB, page 78, for more details.'
  },
  FullThrottle: {
    name: 'FullThrottle',
    setting: 'Steampunk, Weird War, Modern Day, Science Fiction, Space Opera',
    tier: 3,
    activation: true,
    turn: 'Action',
    ranked: false,
    description: 'See CRB, page 78, for more details.'
  },
  Grenadier: {
    name: 'Grenadier',
    setting: 'Steampunk, Weird War, Modern Day, Science Fiction, Space Opera',
    tier: 3,
    activation: true,
    turn: 'Incidental',
    ranked: true,
    description: 'See CRB, page 78, for more details.'
  },
  InspiringRhetoricImproved: {
    name: 'Inspiring Rhetoric (Improved)',
    setting: 'All',
    tier: 3,
    activation: false,
    turn: '',
    ranked: false,
    description: 'See CRB, page 78, for more details.'
  },
  PainkillerSpecialization: {
    name: 'Painkiller Specialization',
    setting: 'All',
    tier: 3,
    activation: false,
    turn: '',
    ranked: true,
    description: 'See CRB, page 79, for more details.'
  },
  ScathingTiradeImproved: {
    name: 'Scathing Tirade (Improved)',
    setting: 'All',
    tier: 3,
    activation: false,
    turn: '',
    ranked: false,
    description: 'See CRB, page 79, for more details.'
  },
  HeroicWill: {
    name: 'Heroic Will',
    setting: 'All',
    tier: 3,
    activation: true,
    turn: 'Incidental, Out of Turn',
    ranked: false,
    description: 'See CRB, page 79, for more details.'
  },
  Natural: {
    name: 'Natural',
    setting: 'All',
    tier: 3,
    activation: true,
    turn: 'Incidental',
    ranked: false,
    description: 'See CRB, page 79, for more details.'
  },
  RapidArchery: {
    name: 'Rapid Archery',
    setting: 'Fantasy',
    tier: 3,
    activation: true,
    turn: 'Maneuver',
    ranked: false,
    description: 'See CRB, page 79, for more details.'
  },
  ParryImproved: {
    name: 'Parry (Improved)',
    setting: 'All',
    tier: 3,
    activation: true,
    turn: 'Incidental, Out of Turn',
    ranked: false,
    description: 'See CRB, page 79, for more details.'
  },
  CantWeTalkAboutThis: {
    name: 'Can\'t We Talk About This?',
    setting: 'All',
    tier: 4,
    activation: true,
    turn: 'Action',
    ranked: false,
    description: 'See CRB, page 79, for more details.'
  },
  Deadeye: {
    name: 'Deadeye',
    setting: 'All',
    tier: 4,
    activation: true,
    turn: 'Incidental',
    ranked: false,
    description: 'See CRB, page 79, for more details.'
  },
  Defensive: {
    name: 'Defensive',
    setting: 'All',
    tier: 4,
    activation: false,
    turn: '',
    ranked: true,
    description: 'See CRB, page 80, for more details.'
  },
  DefensiveDriving: {
    name: 'Defensive Driving',
    setting: 'Steampunk, Weird War, Modern Day, Science Fiction, Space Opera',
    tier: 4,
    activation: false,
    turn: '',
    ranked: true,
    description: 'See CRB, page 80, for more details.'
  },
  Enduring: {
    name: 'Enduring',
    setting: 'All',
    tier: 4,
    activation: false,
    turn: '',
    ranked: true,
    description: 'See CRB, page 80, for more details.'
  },
  FieldCommanderImproved: {
    name: 'Field Commander (Improved)',
    setting: 'All',
    tier: 4,
    activation: false,
    turn: '',
    ranked: false,
    description: 'See CRB, page 80, for more details.'
  },
  HowConvenient: {
    name: 'How Convenient!',
    setting: 'All',
    tier: 4,
    activation: true,
    turn: 'Action',
    ranked: false,
    description: 'See CRB, page 80, for more details.'
  },
  InspiringRhetoricSupreme: {
    name: 'Inspiring Rhetoric (Supreme)',
    setting: 'All',
    tier: 4,
    activation: true,
    turn: 'Incidental',
    ranked: false,
    description: 'See CRB, page 80, for more details.'
  },
  MadInventor: {
    name: 'Mad Inventor',
    setting: 'Steampunk, Weird War',
    tier: 4,
    activation: true,
    turn: 'Action',
    ranked: false,
    description: 'See CRB, page 80, for more details.'
  },
  Overcharge: {
    name: 'Overcharge',
    setting: 'Science Fiction, Space Opera',
    tier: 4,
    activation: true,
    turn: 'Action',
    ranked: false,
    description: 'See CRB, page 80, for more details.'
  },
  ScathingTiradeSupreme: {
    name: 'Scathing Tirade (Supreme)',
    setting: 'All',
    tier: 4,
    activation: true,
    turn: 'Incidental',
    ranked: false,
    description: 'See CRB, page 81, for more details.'
  },
  Dedication: {
    name: 'Dedication',
    setting: 'All',
    tier: 5,
    activation: false,
    turn: '',
    ranked: true,
    description: 'See CRB, page 81, for more details.'
  },
  Indomitable: {
    name: 'Indomitable',
    setting: 'All',
    tier: 5,
    activation: true,
    turn: 'Incidental, Out of Turn',
    ranked: false,
    description: 'See CRB, page 81, for more details.'
  },
  Master: {
    name: 'Master',
    setting: 'All',
    tier: 5,
    activation: true,
    turn: 'Incidental',
    ranked: false,
    description: 'See CRB, page 81, for more details.'
  },
  OverchargeImproved: {
    name: 'Overcharge (Improved)',
    setting: 'Science Fiction, Space Opera',
    tier: 5,
    activation: true,
    turn: 'Action',
    ranked: false,
    description: 'See CRB, page 81, for more details.'
  },
  RuinousRepartee: {
    name: 'Ruinous Repartee',
    setting: 'All',
    tier: 5,
    activation: true,
    turn: 'Action',
    ranked: false,
    description: 'See CRB, page 81, for more details.'
  }
}
export default talents;

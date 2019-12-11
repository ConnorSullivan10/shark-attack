const students = [
  {
    id: 'student1',
    firstName: 'Connor',
    lastName: 'Sullivan',
    isDead: true,
  },
  {
    id: 'student2',
    firstName: 'Alesha',
    lastName: 'Reed',
    isDead: true,
  },
  {
    id: 'student3',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    isDead: true,
  },
  {
    id: 'student4',
    firstName: 'Charity',
    lastName: 'Bunyon',
    isDead: true,
  },
  {
    id: 'student5',
    firstName: 'Crystal',
    lastName: 'Broach',
    isDead: true,
  },
  {
    id: 'student6',
    firstName: 'Denise',
    lastName: 'Baker',
    isDead: false,
  },
  {
    id: 'student7',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    isDead: false,
  },
  {
    id: 'student8',
    firstName: 'Evan',
    lastName: 'Grabenstein',
    isDead: false,
  },
  {
    id: 'student9',
    firstName: 'Gabe Seals',
    lastName: 'Sullivan',
    isDead: false,
  },
  {
    id: 'student10',
    firstName: 'Ivan',
    lastName: 'Phelps',
    isDead: false,
  },
  {
    id: 'student11',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    isDead: false,
  },
  {
    id: 'student12',
    firstName: 'Jamie',
    lastName: 'Phillips',
    isDead: false,
  },
  {
    id: 'student13',
    firstName: 'Jasmine',
    lastName: 'Williams',
    isDead: false,
  },
  {
    id: 'student14',
    firstName: 'John',
    lastName: 'Key',
    isDead: false,
  },
  {
    id: 'student15',
    firstName: 'John',
    lastName: 'Thielman',
    isDead: false,
  },
  {
    id: 'student16',
    firstName: 'John',
    lastName: 'Johnson',
    isDead: false,
  },
  {
    id: 'student17',
    firstName: 'Kelsey',
    lastName: 'Creel',
    isDead: false,
  },
  {
    id: 'student18',
    firstName: 'Laura',
    lastName: 'Collins',
    isDead: false,
  },
  {
    id: 'student19',
    firstName: 'Maggie',
    lastName: 'Greene',
    isDead: false,
  },
  {
    id: 'student20',
    firstName: 'Maria',
    lastName: 'Brock',
    isDead: false,
  },
  {
    id: 'student21',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    isDead: false,
  },
  {
    id: 'student22',
    firstName: 'Randy',
    lastName: 'Tate',
    isDead: false,
  },
  {
    id: 'student23',
    firstName: 'Ray',
    lastName: 'Arceneaux',
    isDead: false,
  },
];

const getStudents = () => students;

const livingStudents = () => {
  const allStudents = getStudents();
  const liveStudents = [];
  allStudents.forEach((student) => {
    if (student.isDead === false) {
      liveStudents.push(student);
    }
  });
  console.log(liveStudents);
  return liveStudents;
};

livingStudents();


const dearlyBeloved = () => {
  const allStudents = getStudents();
  console.log(allStudents);
  const deadStudents = [];
  allStudents.forEach((student) => {
    if (student.isDead === true) {
      deadStudents.push(student);
    }
  });
  console.log(deadStudents);
  return deadStudents;
};

dearlyBeloved();


const followTheLight = (studentId) => {
  students.forEach((response) => {
    if (response.id === studentId) {
      response.isDead = true;
    }
  });
};

export default {
  getStudents,
  livingStudents,
  dearlyBeloved,
  followTheLight,
};

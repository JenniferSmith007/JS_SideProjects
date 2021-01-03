const getSleepHours = day => {
  if (day === 'sunday'){
    return 8;
  }else if (day === 'monday'){
    return 7;
  }else if (day === 'tuesday'){
    return 8;
  }else if (day === 'wednesday'){
    return 6;
  }else if (day === 'thursday'){
    return 8;
  }else if (day === 'friday'){
    return 5;
  }else if (day === 'saturday'){
    return 5;
  };
  };
  const actualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  };
  const getIdealSleepHours = () => {
    let idealHours = 7; 
    let result = idealHours * 7;
    return result;
  };
  const calculateSleepDebt = () => {
    actualSleepHour = actualSleepHours();
    idealSleepHours = getIdealSleepHours();
    if (actualSleepHour === idealSleepHours){
      return 'perfect amount of sleep!';
    }else if (actualSleepHour > idealSleepHours){
      return ' get more sleep than needed';
    }else if (actualSleepHour < idealSleepHours){
      return 'get some more rest!';
    };
  };
  console.log(calculateSleepDebt(12));
  
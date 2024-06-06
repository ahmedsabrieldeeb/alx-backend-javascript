/**
 * Represents the interface for a director.
 */
interface DirectorInterface {
  /**
   * Performs work from home.
   * @returns A string representing the work from home action.
   */
  workFromHome(): string,

  /**
   * Takes a coffee break.
   * @returns A string representing the coffee break action.
   */
  getCoffeeBreak(): string,

  /**
   * Performs director tasks.
   * @returns A string representing the director tasks action.
   */
  workDirectorTasks(): string,
}


/**
 * Represents a Director.
 */
class Director implements DirectorInterface {
  /**
   * Performs work from home.
   * @returns A string indicating that the director is working from home.
   */
  workFromHome(): string {
    return 'Working from home';
  };

  /**
   * Takes a coffee break.
   * @returns A string indicating that the director is getting a coffee break.
   */
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  };

  /**
   * Performs director tasks.
   * @returns A string indicating that the director is getting to director tasks.
   */
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  };
};


/**
 * Represents the interface for a teacher.
 */
interface TeacherInterface {
  /**
   * Simulates working from home.
   * @returns A string representing the action of working from home.
   */
  workFromHome(): string,

  /**
   * Simulates taking a coffee break.
   * @returns A string representing the action of taking a coffee break.
   */
  getCoffeeBreak(): string,

  /**
   * Simulates working on teacher tasks.
   * @returns A string representing the action of working on teacher tasks.
   */
  workTeacherTasks(): string,
};


/**
 * Represents a Teacher.
 */
class Teacher implements TeacherInterface {
  /**
   * Performs work from home.
   * @returns A string indicating that the teacher cannot work from home.
   */
  workFromHome(): string {
    return 'Cannot work from home';
  };

  /**
   * Takes a coffee break.
   * @returns A string indicating that the teacher cannot have a break.
   */
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  };

  /**
   * Performs teacher tasks.
   * @returns A string indicating that the teacher is getting to work.
   */
  workTeacherTasks(): string {
    return 'Getting to work';
  };
};


/**
 * Create a function createEmployee with the following requirements:
 * 
 * It can return either a Director or a Teacher instance.
 * It accepts 1 argument:
 * - salary: either number or string
 * 
 * If salary is a number and less than 500, it should return a new Teacher.
 * Otherwise, it should return a Director.
 * 
 * @param {number | string} salary - The salary of the employee.
 * @returns {Director | Teacher} - An instance of either Director or Teacher.
 */
function createEmployee(salary: number | string): Director | Teacher {
  salary = Number(salary);

  if (salary >= 500) 
    return new Director()
  else
    return new Teacher(); 
};


/**
 * Checks if an employee is a Director.
 * @param employee - The employee to check.
 * @returns `true` if the employee is a Director, `false` otherwise.
 */
function isDirector(employee: Teacher | Director): boolean {
  if (employee instanceof Director)
    return true;
  else
    return false;
};

/**
 * Executes work tasks based on the type of employee.
 * @param {Teacher | Director} employee - The employee to execute work tasks for.
 * @returns {string} A string representing the work tasks performed by the employee.
 */
function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee))
    return (employee as Director).workDirectorTasks();
  else
    return (employee as Teacher).workTeacherTasks();
};

type Subjects =  'Math' | 'History';

/**
 * Function to teach a class based on the subject for the day.
 * 
 * @param todayClass The subject for the day's class, can be either 'Math' or 'History'.
 * @returns A string indicating the action of teaching the specified subject.
 */
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math')
    return 'Teaching Math';
  
  if (todayClass === 'History')
    return 'Teaching History';
};

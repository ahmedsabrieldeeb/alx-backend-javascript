/*
*** firstName(string) and lastName(string).
***     These two attributes should only be modifiable when a Teacher is first initialized
*** fullTimeEmployee(boolean) this attribute should always be defined
*** yearsOfExperience(number) this attribute is optional
*** location(string) this attribute should always be defined
*** Add the possibility to add any attribute to the Object like contract(boolean,
*** without specifying the name of the attribute.
*/
interface Teacher {
  [key: string]: any;

  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
}

/** Write an interface named Directors that extends Teacher.
*** It requires an attribute named numberOfReports(number).
*/
interface Directors extends Teacher {
  numberOfReports: number;
}

/**  Write a function printTeacher:
***  It accepts two arguments firstName and lastName
***  It returns the first letter of the firstName and the full lastName
*** Example: printTeacher("John", "Doe") -> J. Doe
*/
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

/* Write an interface for the function named printTeacherFunction. */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

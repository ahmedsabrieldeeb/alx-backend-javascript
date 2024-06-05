// Write an interface named Directors that extends Teacher.
// It requires an attribute named numberOfReports(number).

interface Teacher {
  [key: string]: any;

  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

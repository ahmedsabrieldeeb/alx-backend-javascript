/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    protected _teacher: Teacher | undefined;

    constructor(teacher?: Teacher) {
      this.setTeacher = teacher;
    };

    set setTeacher(teacher: Teacher) {
      this._teacher = teacher;
    };
  };
};
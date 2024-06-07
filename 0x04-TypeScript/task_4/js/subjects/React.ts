/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number
  }

  export class React extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    };

    getAvailableTeacher(): string {
      if (this._teacher.experienceTeachingReact !== undefined) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return 'No available teacher';
      };
    };
  };
};

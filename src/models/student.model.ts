export interface SubjectMark {
  subject: string;
  marks: number;
  grade: string;
}

export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  stream: string;
  photoUrl: string;
  subjects: SubjectMark[];
}

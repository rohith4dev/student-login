import { Injectable } from '@angular/core';
import { Student } from '../student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    {
      id: '1',
      name: 'Aarav Sharma',
      rollNumber: 'GCTC001',
      stream: 'Computer Science',
      photoUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
      subjects: [
        { subject: 'Data Structures', marks: 85, grade: 'A' },
        { subject: 'Algorithms', marks: 92, grade: 'A+' },
        { subject: 'Database Systems', marks: 78, grade: 'B+' },
        { subject: 'Web Development', marks: 88, grade: 'A' },
        { subject: 'Software Engineering', marks: 91, grade: 'A+' },
      ],
    },
    {
      id: '2',
      name: 'Sneha Reddy',
      rollNumber: 'GCTC002',
      stream: 'Electronics',
      photoUrl: 'https://randomuser.me/api/portraits/women/21.jpg',
      subjects: [
        { subject: 'Digital Systems', marks: 75, grade: 'B+' },
        { subject: 'Analog Circuits', marks: 80, grade: 'B+' },
        { subject: 'Control Systems', marks: 85, grade: 'A' },
        { subject: 'Signals & Systems', marks: 90, grade: 'A+' },
        { subject: 'Microprocessors', marks: 88, grade: 'A' },
      ],
    },
    {
      id: '3',
      name: 'Rahul Mehta',
      rollNumber: 'GCTC003',
      stream: 'Mechanical',
      photoUrl: 'https://randomuser.me/api/portraits/men/31.jpg',
      subjects: [
        { subject: 'Thermodynamics', marks: 70, grade: 'B' },
        { subject: 'Fluid Mechanics', marks: 74, grade: 'B+' },
        { subject: 'Machine Design', marks: 82, grade: 'A' },
        { subject: 'Heat Transfer', marks: 79, grade: 'B+' },
        { subject: 'Manufacturing Tech', marks: 86, grade: 'A' },
      ],
    },
    {
      id: '4',
      name: 'Ananya Gupta',
      rollNumber: 'GCTC004',
      stream: 'Civil',
      photoUrl: 'https://randomuser.me/api/portraits/women/41.jpg',
      subjects: [
        { subject: 'Structural Analysis', marks: 83, grade: 'A' },
        { subject: 'Geotechnical Engg', marks: 76, grade: 'B+' },
        { subject: 'Surveying', marks: 89, grade: 'A' },
        { subject: 'Water Resources', marks: 81, grade: 'A' },
        { subject: 'Transportation Engg', marks: 87, grade: 'A' },
      ],
    },
    {
      id: '5',
      name: 'Karthik Iyer',
      rollNumber: 'GCTC005',
      stream: 'Computer Science',
      photoUrl: 'https://randomuser.me/api/portraits/men/51.jpg',
      subjects: [
        { subject: 'OOPs', marks: 90, grade: 'A+' },
        { subject: 'Operating Systems', marks: 85, grade: 'A' },
        { subject: 'DBMS', marks: 80, grade: 'B+' },
        { subject: 'Computer Networks', marks: 92, grade: 'A+' },
        { subject: 'AI/ML', marks: 88, grade: 'A' },
      ],
    },
    {
      id: '6',
      name: 'Meera Sharma',
      rollNumber: 'GCTC006',
      stream: 'Civil',
      photoUrl: 'https://randomuser.me/api/portraits/women/61.jpg',
      subjects: [
        { subject: 'Construction Materials', marks: 73, grade: 'B' },
        { subject: 'Hydraulics', marks: 77, grade: 'B+' },
        { subject: 'Soil Mechanics', marks: 82, grade: 'A' },
        { subject: 'Irrigation Engg', marks: 79, grade: 'B+' },
        { subject: 'Structural Design', marks: 84, grade: 'A' },
      ],
    },
    {
      id: '7',
      name: 'Rohan Kumar',
      rollNumber: 'GCTC007',
      stream: 'Mechanical',
      photoUrl: 'https://randomuser.me/api/portraits/men/71.jpg',
      subjects: [
        { subject: 'Dynamics', marks: 80, grade: 'B+' },
        { subject: 'Engg Drawing', marks: 85, grade: 'A' },
        { subject: 'Mechatronics', marks: 88, grade: 'A' },
        { subject: 'CAD/CAM', marks: 82, grade: 'A' },
        { subject: 'Refrigeration', marks: 76, grade: 'B+' },
      ],
    },
    {
      id: '8',
      name: 'Sanya Kapoor',
      rollNumber: 'GCTC008',
      stream: 'Electronics',
      photoUrl: 'https://randomuser.me/api/portraits/women/81.jpg',
      subjects: [
        { subject: 'VLSI Design', marks: 84, grade: 'A' },
        { subject: 'Embedded Systems', marks: 91, grade: 'A+' },
        { subject: 'Signal Processing', marks: 78, grade: 'B+' },
        { subject: 'Control Systems', marks: 88, grade: 'A' },
        { subject: 'Digital Comm.', marks: 83, grade: 'A' },
      ],
    },
    {
      id: '9',
      name: 'Arjun Singh',
      rollNumber: 'GCTC009',
      stream: 'Computer Science',
      photoUrl: 'https://randomuser.me/api/portraits/men/91.jpg',
      subjects: [
        { subject: 'AI', marks: 92, grade: 'A+' },
        { subject: 'Cybersecurity', marks: 86, grade: 'A' },
        { subject: 'DSA', marks: 89, grade: 'A' },
        { subject: 'Machine Learning', marks: 90, grade: 'A+' },
        { subject: 'Blockchain', marks: 85, grade: 'A' },
      ],
    },
    {
      id: '10',
      name: 'Kavya Nair',
      rollNumber: 'GCTC010',
      stream: 'Electronics',
      photoUrl: 'https://randomuser.me/api/portraits/women/91.jpg',
      subjects: [
        { subject: 'Communication Theory', marks: 83, grade: 'A' },
        { subject: 'Microcontrollers', marks: 79, grade: 'B+' },
        { subject: 'Analog Devices', marks: 81, grade: 'A' },
        { subject: 'DSP', marks: 86, grade: 'A' },
        { subject: 'IoT', marks: 88, grade: 'A' },
      ],
    }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: string): Student | undefined {
    return this.students.find(student => student.id === id);
  }
}

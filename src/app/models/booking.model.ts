export interface Booking {
    id: string;
    tutor_id: string;
    student_id: string;
    date: string;
    start_time: string;
    end_time: string;
    tutor: {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
      date_of_birth: string;
      nationality: string;
      speciality: string;
    };
    student: {
      id: string;
      first_name: string;
      last_name: string;
      date_of_birth: string;
      address: string;
    };
  }
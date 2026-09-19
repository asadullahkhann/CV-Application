import lorem from "./lorem";

export default {
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  phoneNumber: '1111111212',
  location: 'Moscow',
  aboutMe: lorem,
  skills: 'html css javascript',
  profession: 'web developer',
  schoolName: 'Oakwood High School',
  titleOfStudy: 'The Effects of Social Media on Academic Performance',
  companyName: 'Apple',
  positionTitle: 'full stack developer',
  desc: lorem + lorem,
  startYear: '2002',
  endYear: 'Present',
  getSkills() {
    return this.skills.replaceAll(' ', ',').split(',');
  }
}
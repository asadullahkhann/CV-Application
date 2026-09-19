import '../styles/form.css';

function Input(
  {
    label, 
    name,
    onChange, 
    value, 
    type='text',
    boxType='input',
    placeholder='',
    isRequired = true
  }
) {
  if (boxType === 'textarea') {
    return (
      <label>{label}
        <textarea 
        rows={5} 
        required
        name={name} 
        value={value} 
        onChange={onChange}>
        </textarea>
      </label>
    )
  }
  return (
    <label>{label}
      <input
        required={isRequired}
        name={name} 
        value={value} 
        type={type} 
        placeholder={placeholder} 
        onChange={onChange}
      />
    </label>
  )
}

export default function Form({onChange, onSubmit, values}) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>Personal info</legend>
        <Input 
          name='name' 
          value={values.name}
          label='Name:' 
          onChange={onChange}
        />
        <Input 
          name='email' 
          value={values.email} 
          label='Email:' 
          type='email' 
          onChange={onChange}
        />
        <Input 
          name='phoneNumber' 
          value={values.phoneNumber} 
          label='Phone number:' 
          type='tel' 
          onChange={onChange}
        />
        <Input 
          name='location'
          value={values.location}
          label='Location:'
          onChange={onChange}
        />
        <Input 
          name='aboutMe' 
          value={values.aboutMe} 
          label='About me:' 
          onChange={onChange} 
          boxType='textarea'
        />
        <Input 
          name='skills'
          value={values.skills}
          label='Skills:'
          placeholder='Each skill is separated by a space or a comma'
          onChange={onChange} 
        />
        <Input 
          name='profession'
          value={values.profession}
          label='Profession:'
          onChange={onChange}
        />
      </fieldset>
      <fieldset>
        <legend>Education</legend>
        <Input 
          name='schoolName' 
          value={values.schoolName} 
          label='School name:' 
          onChange={onChange}
        />
        <Input 
          name='titleOfStudy'
          value={values.titleOfStudy}
          label='Title of study:'
          onChange={onChange}
        />
      </fieldset>
      <fieldset>
        <legend>Work experience</legend>
        <Input 
          name='companyName' 
          value={values.companyName} 
          label='Company name:' 
          onChange={onChange}
        />
        <Input 
          name='positionTitle'
          value={values.positionTitle}
          label='Position title:' 
          onChange={onChange}
        />
        <Input 
          name='desc' 
          value={values.desc} 
          label='Description:' 
          onChange={onChange} 
          boxType='textarea'
        />
        <Input 
          name='startYear' 
          value={values.startYear} 
          label='Start year:'
          onChange={onChange}
        />
        <Input 
          name='endYear' 
          value={values.endYear} 
          label='End year: (Optional)' 
          onChange={onChange}
          isRequired={false}
        />
      </fieldset>
      <button>Submit</button>
    </form>
  )
}
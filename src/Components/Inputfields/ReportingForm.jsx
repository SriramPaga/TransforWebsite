import { useEffect, useState } from 'react';
import { CancelBtn, SubmitBtn } from '../Buttons/FormButtons';
import {
  LongTextfield,
  TextArea,
  DateField,
  SelectInput,
  ShortTextfield,
  LongTextfieldWithHelper,
  SingleMediaInput,
  MultipleMediaInput,
  MultiSelectInput,
  Multiselect,
} from './TextField';
import axios from 'axios';
import MultipleInputField from './MultipleInputField';

// const handleSubmit = (e) => {
//   e.preventDefault();

//   console.log('You eneter. ' + username + email + number);
// };

const options = [
  'Club Service',
  'Community Service',
  'International Service ',
  'Professional Development ',
  'Public Relations / Public Image',
  'Editorial',
  'Fundraiser',
];
const ToP = ['Stand Alone', 'Joint Project', 'Collaboration'];
const AreaOfFocus = [
  'Basic Education and literacy',
  'Disease Prevention and Treatment',
  'Peace Building and Conflict Resolution',
  'Environmental Protection',
  'WASH and WinS',
  'Child and Mental Heatlh',
  'NA',
];

export default function ReportingForm() {
  const [selected, setSelected] = useState([]);
  const [coverimg, setCoverImg] = useState([]);
  const [supportimg, setSupportImg] = useState([]);
  // const [maxImgs, setMaxImgs] = useState(false);

  const [formDta, setFormDta] = useState({
    nameOfTheProject: '',
    coverImage: '',
    supportingImages: [],
    startDate: '',
    endDate: '',
    description: '',
    avenue: [],
    areaOfFocus: '',
    totalVolunteerHours: '',
    nameOfPartner: '',
    numberOfVolunteers: '',
    typeofproject: '',
    totalCashContribution: '',
    totalInKindContribution: '',
    fundsRaised: '',
  });

  useEffect(() => {
    setFormDta({ ...formDta, avenue: selected });
  }, [selected]);

  let showAof = formDta.avenue.includes('Community Service');
  const frmdata = new FormData();

  function handleSingleInput(e) {
    setCoverImg(e.target.files);

    frmdata.append('coverImage', e.target.files[0]);
  }
  const cvrImgName = [];
  for (let i = 0; i < coverimg.length; i++) {
    cvrImgName.push(coverimg[i].name);
  }
  // console.log(cvrImgName);

  function handleMultiImgInput(e) {
    setSupportImg(e.target.files);

    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        frmdata.append('image', e.target.files[i]);
      }
    }
  }

  // if (supportimg.length > 5) {
  //   setMaxImgs(true);
  // }
  // function handleResetSupportImgs(e) {
  //   console.log('reaches reset function');
  //   setMaxImgs(false);
  // }
  const supportImgNames = [];
  for (let i = 0; i < supportimg.length; i++) {
    supportImgNames.push(supportimg[i].name);
  }

  function handleData(e) {
    const { name, value } = e.target;
    formDta[name] = value;
  }

  // console.log((files));
  // const handlesubmitImage = ()=>{
  //   const formData = new FormData()
  //   formData.append('image',image)
  //   console.log(formData);

  //   // axios.post('http://localhost:6969/report/img',formData).then(res=> console.log(res.data))
  // }

  async function handlesubmit(e) {
    frmdata.append('form', JSON.stringify(formDta));
    console.log(formDta);
    console.log(frmdata.getAll('form'));
    console.log('IMAGES', frmdata.getAll('image'));
    console.log('COVER IMAGES', frmdata.getAll('coverImage'));
    const data = await axios
      .post(`${process.env.REACT_APP_BACK_URL}/report`, frmdata, {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const AOFinput = (
    <SelectInput
      name={'areaOfFocus'}
      label={'Area Of Focus'}
      autoComplete={'Area Of-Focus'}
      handleFn={handleData}
    >
      {AreaOfFocus.map((opt, i) => {
        return <option key={i}>{opt}</option>;
      })}
    </SelectInput>
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlesubmit(e);
      }}
      encType="multipart/form-data"
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-12">
            <LongTextfield
              label={'Name of the project'}
              placeholder={'Project Name'}
              name={'nameOfTheProject'}
              type={'text'}
              // value={formDta['nameOfTheProject']}
              handleFn={handleData}
            />

            <DateField
              label={'Start Date'}
              placeholder={'startDate'}
              name={'startDate'}
              handleFn={handleData}
              // type={'Date'}
            />
            <DateField
              label={'End Date'}
              placeholder={'endDate'}
              name={'endDate'}
              // type={'Date'}
              handleFn={handleData}
            />
            <TextArea
              label={'Description'}
              placeholder={'phoneNumber'}
              name={'description'}
              rows={4}
              helperText={'Write a description about the project'}
              handleFn={handleData}
            />
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-3xl font-semibold leading-7 text-gray-900">
            Event Details
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-12">
            <MultipleInputField
              name={'avenue'}
              label={'Avenue'}
              autoComplete={'Avenue-Name'}
              options={options}
              selected={selected}
              setSelected={setSelected}
            />
            {/* {options.map((opt, i) => {
                return (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                );
              })} */}
            {/* </MultipleInputField> */}
            {showAof ? AOFinput : <></>}
            {/* <SelectInput
              name={'areaOfFocus'}
              label={'Area Of Focus'}
              autoComplete={'Area Of-Focus'}
              handleFn={handleData}
            >
              {AreaOfFocus.map((opt, i) => {
                return <option key={i}>{opt}</option>;
              })}
            </SelectInput> */}
            <LongTextfieldWithHelper
              label={'Total Volunteer Hours '}
              placeholder={'Volunteer Hours'}
              name={'totalVolunteerHours'}
              type={'number'}
              autoComplete={'given-text'}
              handleFn={handleData}
            >
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Volunteer Hours = Number of Volunteers x Number of Hours Spent
                by Each Volunteer.
              </label>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Ex: If a project was volunteered by 5 members for 3 hours each,
                Total Volunteers Hours = 5x3 = 15.
              </label>
            </LongTextfieldWithHelper>
            <LongTextfieldWithHelper
              label={'Name of Partner(s)'}
              placeholder={'Partner Name'}
              name={'nameOfPartner'}
              type={'text'}
              autoComplete={'given-text'}
              handleFn={handleData}
            >
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Ex: If it's a joint project/collaboration with Rotaract Club of
                XYZ, the Partner Club will be Rotaract Club of XYZ.
              </label>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                (It can be a Rotary Club, Rotaract Club, Interact Club or an
                external organisation)
              </label>
            </LongTextfieldWithHelper>

            <ShortTextfield
              label={'Number of Volunteers'}
              placeholder={'number of volunteers'}
              name={'numberOfVolunteers'}
              type={'number'}
              autoComplete={'given-text'}
              handleFn={handleData}
            />
            <SelectInput
              name={'typeofproject'}
              label={'Type of Project'}
              autoComplete={'Type-of-Project'}
              handleFn={handleData}
            >
              {ToP.map((opt, i) => {
                return <option key={i}>{opt}</option>;
              })}
            </SelectInput>
            <ShortTextfield
              label={'Total Cash Contribution (if any)'}
              placeholder={'Cash Contribution'}
              name={'totalCashContribution'}
              type={'number'}
              autoComplete={'given-text'}
              handleFn={handleData}
            />
            <ShortTextfield
              label={'Total in-kind Contribution (if any)'}
              placeholder={'Contribution in kind'}
              name={'totalInKindContribution'}
              type={'text'}
              autoComplete={'given-text'}
              handleFn={handleData}
            />
            <SingleMediaInput
              // multipleImgs={false}
              handleFn={handleSingleInput}
              label={'Upload a cover image for the project.'}
              to
              name="coverImage"
            />
            <div className="sm:col-span-3">
              Cover Image List
              <div className=" bg-gray-200 p-4 rounded-md">
                <li className="travelcompany-input">{cvrImgName}</li>
              </div>
            </div>
            {/* {maxImgs ? (
              <div className="sm:col-span-3">
                Number of Images Limit Crossed
                <button onClick={() => handleResetSupportImgs()}>
                  ResetImages
                </button>
              </div>
            ) : ( */}
            <MultipleMediaInput
              multipleImgs={true}
              handleFn={handleMultiImgInput}
              label={
                'Upload at least three(3) and utmost five(5) images relevant images of the project.'
              }
              name="supportingImages"
            />
            {/* )} */}

            <div className="sm:col-span-3">
              Files Uploaded
              <div className=" bg-gray-200 p-4 rounded-md">
                {supportImgNames.map((name, i) => {
                  return (
                    <li className="travelcompany-input" key={i}>
                      {name}
                    </li>
                  );
                })}
              </div>
            </div>

            <LongTextfieldWithHelper
              label={
                'How much Funds were raised through fundraisers and crowd funding? (If any)'
              }
              placeholder={'Funds Raised'}
              name={'fundsRaised'}
              type={'text'}
              autoComplete={'given-text'}
              handleFn={handleData}
            >
              <label className="block text-sm font-medium leading-6 text-gray-900">
                This is COMPLETELY OPTIONAL. These details will only help the
                District GUIDE Clubs to improve in Funds management &
                Fundraising and help Clubs maintain their Treasury Reports
              </label>
            </LongTextfieldWithHelper>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-x-6 mx-72 pb-12">
        {/* <CancelBtn /> */}
        <SubmitBtn />
      </div>
    </form>
  );
}

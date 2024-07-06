import { CancelBtn, SubmitBtn } from '../Buttons/FormButtons';
import {
  LongTextfield,
  TextArea,
  DateField,
  SelectInput,
  ShortTextfield,
  LongTextfieldWithHelper,
  MediaInput,
} from './TextField';

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const username = formData.get('userName');
  const email = formData.get('email');
  const number = formData.get('number');
  console.log('You eneter. ' + username + email + number);
};

const options = [
  'Club Service',
  'Community Service ',
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
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-12">
            <LongTextfield
              label={'Name of the project'}
              placeholder={'Project Name'}
              name={'userName'}
              type={'text'}
            />
            <DateField
              label={'Start Date'}
              placeholder={'Date'}
              name={'StartDate'}
              // type={'Date'}
            />
            <DateField
              label={'End Date'}
              placeholder={'Date'}
              name={'EndDate'}
              // type={'Date'}
            />
            <TextArea
              label={'Description'}
              placeholder={'phoneNumber'}
              name={'about'}
              rows={4}
              helperText={'Write a description about the project'}
            />
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-3xl font-semibold leading-7 text-gray-900">
            Event Details
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-12">
            <SelectInput
              name={'avenue'}
              label={'Avenue'}
              autoComplete={'Avenue-Name'}
            >
              {options.map((opt, i) => {
                return <option key={i}>{opt}</option>;
              })}
            </SelectInput>

            <SelectInput
              name={'areaOfFocus'}
              label={'Area Of Focus'}
              autoComplete={'Area Of-Focus'}
            >
              {AreaOfFocus.map((opt, i) => {
                return <option key={i}>{opt}</option>;
              })}
            </SelectInput>

            <LongTextfieldWithHelper
              label={'Total Volunteer Hours '}
              placeholder={'Volunteer Hours'}
              name={'VolunteerHours'}
              type={'number'}
              autoComplete={'given-text'}
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
              name={'PartnerName'}
              type={'text'}
              autoComplete={'given-text'}
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
              name={'volunteerNumber'}
              type={'number'}
              autoComplete={'given-text'}
            />

            <SelectInput
              name={'typeofproject'}
              label={'Type of Project'}
              autoComplete={'Type-of-Project'}
            >
              {ToP.map((opt, i) => {
                return <option key={i}>{opt}</option>;
              })}
            </SelectInput>

            <ShortTextfield
              label={'Total Cash Contribution (if any)'}
              placeholder={'Cash Contribution'}
              name={'cashcontribution'}
              type={'number'}
              autoComplete={'given-text'}
            />

            <ShortTextfield
              label={'Total in-kind Contribution (if any)'}
              placeholder={'Contribution in kind'}
              name={'inKindContribution'}
              type={'text'}
              autoComplete={'given-text'}
            />
            <MediaInput
              label={'Upload at least three(3) relevant images of the project.'}
            />
            <LongTextfieldWithHelper
              label={
                'How much Funds were raised through fundraisers and crowd funding? (If any)'
              }
              placeholder={'Funds Raised'}
              name={'FundsRaised'}
              type={'text'}
              autoComplete={'given-text'}
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
        <CancelBtn />
        <SubmitBtn />
      </div>
    </form>
  );
}

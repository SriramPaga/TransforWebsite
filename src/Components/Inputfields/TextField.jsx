import { useRef, useState } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Select from 'react-select';
export const LongTextfield = (props) => {
  return (
    <div className="sm:col-span-6">
      <div className=" bg-gray-200 p-4 rounded-md">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {props.label}
        </label>
        <div className="mt-2">
          <input
            required
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            id="first-name"
            autoComplete={props.autoComplete}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => {
              props.handleFn(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const ShortTextfield = (props) => {
  return (
    <div className="sm:col-span-3">
      <div className=" bg-gray-200 p-4 rounded-md">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {props.label}
        </label>
        {props.children ? <div className="my-2">{props.children}</div> : ''}
        <div className="mt-2">
          <input
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            id={props.id}
            autoComplete={props.autoComplete}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            onChange={(e) => {
              props.handleFn(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export const LongTextfieldWithHelper = (props) => {
  return (
    <div className="sm:col-span-12">
      <div className=" bg-gray-200 p-4 rounded-md">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {props.label}
        </label>
        {props.children ? <div className="my-2">{props.children}</div> : ''}
        <div className="mt-2">
          <input
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            id={props.id}
            autoComplete={props.autoComplete}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
            onChange={(e) => {
              props.handleFn(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const TextArea = (props) => {
  const [input, setInput] = useState('');
  const charCounter = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="col-span-full">
      <div className=" bg-gray-200 p-4 rounded-md">
        <label
          htmlFor="about"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {props.label}
        </label>
        <div className="mt-2">
          <textarea
            required
            name={props.name}
            rows={props.rows}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={''}
            maxLength={250}
            onChange={(e) => {
              charCounter(e);
              props.handleFn(e);
            }}
          />
        </div>
        <div className="flex justify-between align-middle">
          <p className="mt-3 text-sm leading-6 text-gray-600">
            {props.helperText}
          </p>
          <h1 className="mt-3 text-sm leading-6 text-gray-600">
            {250 - input.length}
          </h1>
        </div>
      </div>
    </div>
  );
};

export const DateField = (props) => {
  return (
    <div className="sm:col-span-3">
      <div className=" bg-gray-200 p-4 rounded-md">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {props.label}
        </label>
        <div className="mt-2">
          <input
            required
            placeholder={props.placeholder}
            type="date"
            name={props.name}
            id="first-name"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => {
              props.handleFn(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const SingleMediaInput = (props) => {
  return (
    <div className="sm:col-span-6">
      <label
        htmlFor="cover-photo"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <PhotoIcon
            className="mx-auto h-12 w-12 text-gray-300"
            aria-hidden="true"
          />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="singlefileUpload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>

              <input
                required
                id="singlefileUpload"
                name={props.name}
                type="file"
                className="sr-only"
                onInput={(e) => {
                  props.handleFn(e);
                }}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">PNG, JPG up to 5MB</p>
        </div>
      </div>
    </div>
  );
};
export const MultipleMediaInput = (props) => {
  return (
    <div className="sm:col-span-6">
      <label
        htmlFor="cover-photo"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <PhotoIcon
            className="mx-auto h-12 w-12 text-gray-300"
            aria-hidden="true"
          />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="multifileUpload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>

              <input
                required
                multiple
                id="multifileUpload"
                name={props.name}
                type="file"
                className="sr-only"
                onInput={(e) => {
                  props.handleFn(e);
                }}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">PNG, JPG up to 5MB</p>
        </div>
      </div>
    </div>
  );
};

export const SelectInput = (props) => {
  return (
    <div className="sm:col-span-6">
      <div className=" bg-gray-200 p-4 rounded-md">
        <div className="">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {props.label}
          </label>
          <div className="mt-2">
            <select
              onChange={(e) => {
                props.handleFn(e);
              }}
              required
              id={props.id}
              name={props.name}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-m sm:text-sm sm:leading-6"
            >
              {props.children}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MultiSelectInput = (props) => {
  return (
    <div className="sm:col-span-6">
      <div className=" bg-gray-200 p-4 rounded-md">
        <div className="">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {props.label}
          </label>
          <div className="mt-2">
            <select
              onChange={(e) => {
                props.handleFn(e);
              }}
              multiple
              required
              id={props.id}
              name={props.name}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-m sm:text-sm sm:leading-6"
            >
              {props.children}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Multiselect = (props) => (
  <Select
    // defaultValue={[options[2], options[3]]}
    isMulti
    name="colors"
    options={props.options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);

export const Checkbox = (props) => {
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Notifications
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        We'll always let you know about important changes, but you pick what
        else you want to hear about.
      </p>

      <div className="mt-10 space-y-10">
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900">
            By Email
          </legend>
          <div className="mt-6 space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  onChange={(e) => {
                    props.handleFn(e);
                  }}
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Comments
                </label>
                <p className="text-gray-500">
                  Get notified when someones posts a comment on a posting.
                </p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  onChange={(e) => {
                    props.handleFn(e);
                  }}
                  id="candidates"
                  name="candidates"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label
                  htmlFor="candidates"
                  className="font-medium text-gray-900"
                >
                  Candidates
                </label>
                <p className="text-gray-500">
                  Get notified when a candidate applies for a job.
                </p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  onChange={(e) => {
                    props.handleFn(e);
                  }}
                  id="offers"
                  name="offers"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="offers" className="font-medium text-gray-900">
                  Offers
                </label>
                <p className="text-gray-500">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900">
            Push Notifications
          </legend>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            These are delivered via SMS to your mobile phone.
          </p>
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-x-3">
              <input
                id="push-everything"
                name="push-notifications"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="push-everything"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Everything
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="push-email"
                name="push-notifications"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="push-email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Same as email
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="push-nothing"
                name="push-notifications"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="push-nothing"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                No push notifications
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from './assests/search-icon.svg';

const BaseInput = styled.input`
  border: none;
  outline: none;
  &::placeholder {
    color: #999; /* Placeholder text color */
  }
  background: transparent;
`;
const LocationInput = styled(BaseInput)``;

const DaysInput = styled(BaseInput)``;

const Label = styled.label``;
const SearchButton = styled.button``;
const MegaSearch = () => {
  return (
    <div className="w-10/12 mt-4 mx-auto ">
      <div className="rounded-full py-4 border-solid border border-gray-200 bg-slate-100 px-4">
        <div className="flex flex-row gap-y-16 bg-slate-200 px-4 py-2 rounded-full">
          <div className="flex flex-col justify-center px-4 w-6/12">
            <Label>Location</Label>
            <LocationInput placeholder="Where are you going" />
          </div>
          <div className="flex flex-row justify-center items-center w-1/12">
            |
          </div>
          <div className="flex flex-col justify-center pr-4 w-4/12">
            <Label>Days</Label>
            <DaysInput placeholder="Number of days" />
          </div>
          <div className="flex flex-col justify-center pr-4 w-1/12 items-end">
            <SearchButton className=" flex justify-center flex-col  bg-red-400 rounded-full h-10 w-10 items-center">
              <SearchIcon />
            </SearchButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaSearch;

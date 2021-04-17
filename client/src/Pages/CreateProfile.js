import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StarOfLife } from '@styled-icons/fa-solid/StarOfLife';
import FormButton from '../components/Ui/Button/FormButton';
import isValidForm from '../lib/validateFunctions';
import requests from '../services/requests';
import Tags from '../components/Tags';

import { Delete } from '@styled-icons/fluentui-system-regular/Delete';

export default function CreateProfile({
  friends,
  watchlist,
  favorites,
  isLoggedIn,
  userProfile,
  setIsLoggedIn,
  setUserProfile,
}) {
  const [infoClicked, setInfoClicked] = useState(false);
  const userUrl = `${requests.user}${userProfile?._id}`;
  const [isDelete, setIsDelete] = useState(false);

  const initialProfile = {
    age: '',
    email: '',
    favorites: [...favorites],
    favoritesNumber: favorites?.length,
    friendsNumber: friends?.length,
    name: '',
    tags: [],
    watchlist: [...watchlist],
    watchlistNumber: watchlist.length,
  };
  const [profile, setProfile] = useState(initialProfile);

  const handleChange = (event) => {
    const field = event.target;
    let value = event.target.value;
    setProfile({
      ...profile,
      [field.name]: value,
    });
  };

  async function createProfile(profile) {
    try {
      const response = await axios.post(requests.fetchUsers, profile);
      const data = response.data;
      setUserProfile(data);
      setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteUser() {
    try {
      const response = await axios.delete(userUrl);
      const data = response.data;
    } catch (error) {
      console.error(error.message);
    }
  }

  async function updateUserInfos(profile) {
    try {
      const response = await axios.put(userUrl, {
        age: profile.age,
        email: profile.email,
        name: profile.name,
        tags: profile.tags,
      });
      const data = response.data;
      setUserProfile(data);
    } catch (e) {
      console.log(e);
    }
  }

  function onDelete(event) {
    if (window.confirm('Are you sure you want to delete your profile?')) {
      event.preventDefault();
      deleteUser();
      setUserProfile({});
      setProfile(initialProfile);
      localStorage.removeItem('UserProfile');
      setIsLoggedIn(false);
    }
  }

  function createHandler(event) {
    event.preventDefault();
    if (isValidForm(profile)) {
      createProfile(profile);
    } else {
      alert('Please submit valid credentials');
    }
  }

  function upDateProfile(event) {
    event.preventDefault();
    if (isValidForm(profile)) {
      updateUserInfos(profile);
    } else {
      alert('Please submit valid credentials');
    }
  }

  const addProfileTag = (tag) => {
    setProfile({
      ...profile,
      tags: [...profile.tags, tag],
    });
  };

  const removeProfileTag = (deletetag) => {
    const remainingTags = profile.tags.filter((tag) => tag !== deletetag);
    setProfile({ ...profile, tags: remainingTags });
  };

  return (
    <>
      <HeadlineWrapper>
        <h2 data-testid="headline">
          {isLoggedIn ? 'Edit Profile' : 'Create Profile'}
        </h2>
      </HeadlineWrapper>
      <PageWrapper>
        <Form data-testid="form">
          <label htmlFor="name">
            <p>Name</p>
            <br />
            <InputStyler
              type="text"
              name="name"
              data-testid="name"
              value={profile.name}
              onChange={handleChange}
              placeholder={userProfile?.name}
            />
          </label>
          <label htmlFor="age">
            <p>Age</p>
            <br />
            <InputStyler
              type="text"
              name="age"
              data-testid="age"
              value={profile.age}
              onChange={handleChange}
              placeholder={userProfile?.age}
            />
          </label>
          <label htmlFor="email">
            <p>E-Mail*</p>
            <br />
            <InputStyler
              type="text"
              name="email"
              data-testid="email"
              value={profile.email}
              onChange={handleChange}
              placeholder={userProfile?.email}
            />
          </label>
          <label htmlFor="tags">
            <p>User Tags</p>
            <br />

            <Tags
              addProfileTag={addProfileTag}
              tags={profile?.tags}
              removeProfileTag={removeProfileTag}
            />
          </label>
          <ButtonContainer data-testid="button">
            <CreateContainer isLoggedIn={isLoggedIn}>
              <FormButton onClick={createHandler} text="Submit" />
            </CreateContainer>
            <EditContainer isLoggedIn={isLoggedIn} isDelete={isDelete}>
              <FormButton onClick={upDateProfile} text="Edit" />
              <FormButton
                onClick={onDelete}
                text="Delete"
                isDelete={isDelete}
              />
            </EditContainer>
          </ButtonContainer>
          <FlexContainer>
            <InfoContainer infoClicked={infoClicked}>
              <span onClick={() => setInfoClicked(!infoClicked)}>
                <Information />
              </span>
              <p>
                Fields populated on this page are for form validation practice
                only. The email address won't be submitted or stored. Therefore,
                feel free to use imaginary profile details.
              </p>
            </InfoContainer>
            <DeleteIcon onClick={() => setIsDelete(!isDelete)} />
          </FlexContainer>
        </Form>
        <button onClick={() => console.log(isDelete)}></button>
      </PageWrapper>
    </>
  );
}

CreateProfile.propTypes = {
  friends: PropTypes.array,
  favorites: PropTypes.array,
  watchlist: PropTypes.array,
  isLoggedIn: PropTypes.bool,
  createHandler: PropTypes.func,
  userProfile: PropTypes.object,
  setUserProfile: PropTypes.func,
};

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  p {
    margin: 0;
  }

  label {
    margin: 0;
    margin-bottom: 1rem;
    max-width: 20rem;
    width: 100%;
  }
`;

const PageWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const HeadlineWrapper = styled.div`
  margin-left: 20px;
`;

const InputStyler = styled.input`
  border: none;
  border-radius: 5px;
  height: 25px;
  max-width: 20rem;
  outline: none;
  padding: 10px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  /* max-width: 10rem; */
  margin-top: 1rem;
`;
const CreateContainer = styled.div`
  display: ${({ isLoggedIn }) => (isLoggedIn ? 'none' : '')};
`;

const EditContainer = styled.div`
  display: ${({ isLoggedIn }) => (isLoggedIn ? 'flex' : 'none')};
  /* border: white solid 1px; */
  width: 100%;
  width: 15rem;
  /* justify-content: flex-start;
  align-items: space-evenly; */
  button:first-child {
    margin-left: 1rem;
    display: ${({ isDelete }) => (isDelete ? 'none' : '')};
  }

  button:last-child {
    margin-left: 1rem;
    display: ${({ isDelete }) => (isDelete ? '' : 'none')};
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const DeleteIcon = styled(Delete)`
  width: 25px;
  height: 25px;
  color: white;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  max-width: 20rem;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 20px;
    width: 20px;
    border: var(--secondary-100) solid 1px;
    border-radius: 50%;
    transition: transform 450ms;
    &:hover {
      transform: scale(1.25);
    }
  }
  p {
    visibility: ${({ infoClicked }) => (infoClicked ? '' : 'hidden')};
    margin-left: 10px;
    font-size: 0.7rem;
    padding: 5px;
  }
`;
const Information = styled(StarOfLife)`
  color: var(--secondary-100);
  height: 10px;
  width: 10px;
`;

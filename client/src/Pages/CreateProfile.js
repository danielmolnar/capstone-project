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
import { InfoCircle } from '@styled-icons/boxicons-regular/InfoCircle';

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
      await axios.delete(userUrl);
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
            <MailContainer>
              <p>E-Mail</p>{' '}
              <Information onClick={() => setInfoClicked(!infoClicked)} />
            </MailContainer>
            <InfoText infoClicked={infoClicked}>
              Your Mail address won't be stored. The validation is for practice
              only. Feel free to use an imaginary address with a common
              structure.
            </InfoText>
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
              <DeleteIcon onClick={() => setIsDelete(!isDelete)} />
            </EditContainer>
          </ButtonContainer>
        </Form>
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

const InfoText = styled.p`
  padding-top: 0.5rem;
  font-size: 0.7rem;
  display: ${({ infoClicked }) => (infoClicked ? '' : 'none')};
`;

const MailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;

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
  display: flex;
  justify-content: center;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 20rem;
  margin-top: 1rem;
`;
const CreateContainer = styled.div`
  display: ${({ isLoggedIn }) => (isLoggedIn ? 'none' : '')};
`;

const EditContainer = styled.div`
  display: ${({ isLoggedIn }) => (isLoggedIn ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  width: 100%;
  width: 15rem;

  button:first-child {
    display: ${({ isDelete }) => (isDelete ? 'none' : '')};

    :hover {
      background-color: var(--button-hover-light);
    }
  }

  button:nth-child(2) {
    display: ${({ isDelete }) => (isDelete ? '' : 'none')};

    :hover {
      background-color: var(--button-hover-light);
    }
  }
`;

const DeleteIcon = styled(Delete)`
  margin: 0.5rem 0;
  width: 25px;
  height: 25px;
  color: white;
  cursor: pointer;
`;

const Information = styled(InfoCircle)`
  color: var(--secondary-100);
  height: 20px;
  width: 20px;
  color: white;
  cursor: pointer;
`;

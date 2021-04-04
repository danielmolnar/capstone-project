import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import FormButton from '../components/Ui/Button/FormButton';
import isValidForm from '../lib/validateFunctions';
import Tags from '../components/Tags';

export default function CreateProfile({ createProfile, updateProfile }) {
  const [favorites, setFavorites] = useLocalStorage('Favorites', []);
  const [myProfile, setMyProfile] = useLocalStorage('My Profile', []);
  // const [myProfile, setMyProfile] = useState({});

  // const [user, setUser] = useLocalStorage('UserProfile', []);

  // const apiServerURL = 'http://localhost:4000';

  // useEffect(() => {
  //   fetch(apiServerURL + '/users/60646e28278c5d29fd3a041f')
  //     .then((result) => result.json())
  //     .then((user) => setUser(user))
  //     .catch((error) => console.error(error.message));
  // }, []);

  const isExistingProfile = myProfile.name;

  const initialProfile = {
    name: '',
    age: '',
    tags: [],
    email: '',
    favorites: [...favorites],
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

  function submitProfile(event) {
    event.preventDefault();
    if (isValidForm(profile)) {
      createProfile(profile);
      setMyProfile(profile);
      // setProfile(initialProfile);
    } else {
      alert('Please submit valid credentials');
    }
  }

  function updateMyProfile(profile) {
    setMyProfile({ ...profile, favorites: [...favorites] });
    updateProfile(profile);
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
        <h2>{myProfile.name ? 'Edit Profile ' : 'Create Profile'}</h2>
      </HeadlineWrapper>
      <PageWrapper>
        <FormWrapper>
          <form onSubmit={submitProfile}>
            <ProfileContainer>
              <LabelStyler htmlFor="Name">
                <p>Name</p>
                <InputStyler
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder={profile.name}
                />
              </LabelStyler>
              <LabelStyler htmlFor="Age">
                <p>Age</p>
                <InputStyler
                  type="text"
                  name="age"
                  value={profile.age}
                  onChange={handleChange}
                  placeholder={profile.age}
                />
              </LabelStyler>
              <LabelStyler htmlFor="E-Mail">
                <p>E-Mail</p>
                <InputStyler
                  type="text"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder={profile.email}
                />
              </LabelStyler>
              <Tags
                headline="User Tags"
                addProfileTag={addProfileTag}
                tags={profile.tags}
                removeProfileTag={removeProfileTag}
              />

              <LabelStyler htmlFor="About me">
                About me
                <br />
                <br />
                <InputStyler
                  type="text"
                  name="about"
                  value={profile.about}
                  onChange={handleChange}
                  placeholder={profile.about}
                />
              </LabelStyler>
              <ButtonContainer isExistingProfile={isExistingProfile}>
                <FormButton type="submit" text="Submit" />

                <FormButton
                  type="submit"
                  text="Edit"
                  onClick={updateMyProfile}
                />
              </ButtonContainer>
            </ProfileContainer>
          </form>
          <button onClick={() => updateMyProfile(myProfile)}>CLICK ME!</button>
          <button onClick={() => console.log(myProfile)}>CLICK ME!</button>
        </FormWrapper>
      </PageWrapper>
    </>
  );
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func,
  updateProfile: PropTypes.func,
};

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const HeadlineWrapper = styled.div`
  margin-left: 20px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 1rem;

  p {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const LabelStyler = styled.label`
  color: white;
`;

const InputStyler = styled.input`
  border: none;
  border-radius: 5px;
  height: 25px;
  margin-bottom: 2rem;
  max-width: 400px;
  outline: none;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  button:first-child {
    display: ${({ isExistingProfile }) => (isExistingProfile ? 'none' : '')};
  }

  button:last-child {
    display: ${({ isExistingProfile }) => (isExistingProfile ? '' : 'none')};
  }
`;

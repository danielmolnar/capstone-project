import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tags from '../components/Tags';
import { useLocalStorage } from '../hooks/useLocalStorage';
import FormButton from '../components/Ui/Button/FormButton';

export default function Profile({ createProfile, updateProfile }) {
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
    about: '',
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
    createProfile(profile);
    // setProfile(initialProfile);
    setMyProfile(profile);
  }

  function updateMyProfile(event) {
    event.preventDefault();
    updateProfile(myProfile);
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

  function removeLastTag() {
    const remainingTags = profile.tags.slice(0, profile.tags.length - 1);
    setProfile({ ...profile, tags: [...remainingTags] });
  }

  return (
    <>
      <HeadlineWrapper>
        <h2>{myProfile.name ? 'Edit Profile ' : 'Create Profile'}</h2>
      </HeadlineWrapper>
      <PageWrapper>
        <FormWrapper>
          <form onSubmit={submitProfile}>
            <ProfileContainer>
              <LabelStyler htmlFor="">
                <p>Name</p>
                <InputStyler
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder={profile.name}
                />
              </LabelStyler>
              <LabelStyler htmlFor="">
                <p>Age</p>
                <InputStyler
                  type="text"
                  name="age"
                  value={profile.age}
                  onChange={handleChange}
                  placeholder={profile.age}
                />
                <p>User Tags</p>
              </LabelStyler>
              <Tags
                addProfileTag={addProfileTag}
                tags={profile.tags}
                removeProfileTag={removeProfileTag}
                removeLastTag={removeLastTag}
              />

              <LabelStyler htmlFor="">
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
          <button onClick={() => setMyProfile({})}>CLICK ME!</button>
          <button onClick={() => console.log(myProfile)}>CLICK ME!</button>
        </FormWrapper>
      </PageWrapper>
    </>
  );
}

const PageWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const HeadlineWrapper = styled.div`
  margin-left: 20px;
`;

const ProfileContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;

  p {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const LabelStyler = styled.label`
  color: white;
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

const InputStyler = styled.input`
  max-width: 400px;
  outline: none;
  padding: 10px;
  margin-bottom: 2rem;
  height: 25px;
  border: none;
  border-radius: 5px;
`;

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tags from '../components/Tags';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Profile({ createProfile }) {
  const [favorites, setFavorites] = useLocalStorage('Favorites', []);
  const [user, setUser] = useLocalStorage('UserProfile', []);

  const apiServerURL = 'http://localhost:4000/api';

  useEffect(() => {
    fetch(apiServerURL + '/users/60646e28278c5d29fd3a041f')
      .then((result) => result.json())
      .then((user) => setUser(user))
      .catch((error) => console.error(error.message));
  }, []);

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
    setProfile(initialProfile);
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
    <PageWrapper>
      <HeadlineWrapper>
        <h2>Edit Profile</h2>
      </HeadlineWrapper>

      <form onSubmit={submitProfile}>
        <ProfileContainer>
          <LabelStyler htmlFor="">
            Name <br />
            <br />
            <InputStyler
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder={profile.name}
            />
          </LabelStyler>
          <LabelStyler htmlFor="">
            Age
            <br />
            <br />
            <InputStyler
              type="text"
              name="age"
              value={profile.age}
              onChange={handleChange}
              placeholder={profile.age}
            />
          </LabelStyler>

          <Tags
            addProfileTag={addProfileTag}
            tags={profile.tags}
            removeProfileTag={removeProfileTag}
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
          <ButtonContainer>
            <StyledButton type="submit">Submit</StyledButton>
            <StyledButton type="cancel">Cancel</StyledButton>
          </ButtonContainer>
        </ProfileContainer>
      </form>
      <button onClick={() => console.log(user)}>CLICK ME!</button>
      <button onClick={() => setProfile(initialProfile)}>CLICK ME!</button>

      <p>You entered: {profile.name}</p>
      <p>Your age: {profile.age}</p>
      <p>About me: {profile.about}</p>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1020px;
  @media (min-width: 1020px) {
    box-shadow: var(--boxshadow);
    height: 100%;
    padding: 1rem 0;
    border-radius: 5px;
  }
`;

const HeadlineWrapper = styled.div`
  margin-left: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  border: solid 1px white;
`;

const LabelStyler = styled.label`
  text-align: left;

  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
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

const StyledButton = styled.button`
  background-color: var(--primary-100);
  box-shadow: var(--boxshadow);
  border-radius: 3px;
  border: none;
  color: white;
  font-weight: bold;
  margin-bottom: 5px;
  outline: none;
  padding: 5px 10px;
  text-decoration: none;
  transition: transform 250ms;
  width: 5rem;

  cursor: pointer;
  :hover {
    background-color: var(--primary-100-opacity);
  }
`;

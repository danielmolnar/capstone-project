import { useState } from 'react';
import styled from 'styled-components';
import Tags from '../components/Tags';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Profile({ createProfile }) {
  const [favorites, setFavorites] = useLocalStorage('Favorites', []);
  const [user, setUser] = useLocalStorage('UserProfile', []);

  const initialProfile = {
    name: '',
    age: '',
    favorite_movies: [...favorites],
    tags: [],
    about_me: '',
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
    <>
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
              name="about_me"
              value={profile.about_me}
              onChange={handleChange}
            />
          </LabelStyler>
          <ButtonContainer>
            <button type="submit">Submit</button>
            <button type="cancel">Cancel</button>
          </ButtonContainer>
        </ProfileContainer>
      </form>
      <button onClick={() => console.table(user)}>CLICK ME!</button>
      <button onClick={() => setUser(profile)}>CLICK ME!</button>

      <p>You entered: {profile.name}</p>
      <p>Your age: {profile.age}</p>
      <p>About me: {profile.about_me}</p>
    </>
  );
}

const HeadlineWrapper = styled.div`
  margin-left: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
  padding: 1rem;
`;

const LabelStyler = styled.label`
  text-align: left;

  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const InputStyler = styled.input`
  max-width: 400px;
`;

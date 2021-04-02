### Open Modal

```jsx
import React, { useState } from 'react';
import InfoButton from './Ui/Button/InfoButton.js';
const [open, setOpen] = useState(false);

<>
  <InfoButton clickHandler={() => setOpen(true)} />
  <CardInfos
    movie={{
      name: 'Lucifer',
      title: 'Lucifer',
      original_name: 'Lucifer',
      poster_path: '/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg',
      backdrop_path: '/ta5oblpMlEcIPIS2YGcq9XEkWK2.jpg',
      id: 63174,
      first_air_date: '2021',
      overview:
        'Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne.',
      release: '2021-05-22',
      vote_average: 7,
    }}
    open={open}
    movieName="Test"
    release="2021-05-05"
    onClose={() => setOpen(false)}
  />
</>;
```

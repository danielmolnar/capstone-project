```jsx
import React, { useState } from 'react';
import Button from './Button';
const [open, setOpen] = useState(false);
<>
  <Button clickHandler={() => setOpen(true)} />
  <CardInfos
    open={open}
    movieName="Test"
    release="2021-05-05"
    onClose={() => setOpen(false)}
  />
</>;
```

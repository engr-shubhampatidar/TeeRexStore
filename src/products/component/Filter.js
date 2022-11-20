import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  styled,
} from "@mui/material";
import { useState } from "react";

export const Filter = ({ setfilterAttribute }) => {
  const SBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  });

  const CFormLabel = styled(FormLabel)({
    fontSize: "1.7rem",
    fontWeight: 700,
  });

  const [color, setColor] = useState({
    red: false,
    blue: false,
    green: false,
  });

  const [gender, setGender] = useState({ men: false, women: false });

  const [type, setType] = useState({
    Polo: false,
    Hoodie: false,
    Basic: false,
  });

  const handleList = (event) => {
    if (event.target.checked) {
      setfilterAttribute(event.target.name, "add");
    } else {
      setfilterAttribute(event.target.name, "remove");
    }
  };

  const handleColorChange = (event) => {
    setColor({
      ...color,
      [event.target.name]: event.target.checked,
    });
    handleList(event);
  };

  const handleGenderChange = (event) => {
    setGender({
      ...gender,
      [event.target.name]: event.target.checked,
    });
    handleList(event);
  };

  const handleTypeChange = (event) => {
    setType({
      ...type,
      [event.target.name]: event.target.checked,
    });
    handleList(event);
  };

  const { red, blue, green } = color;
  const { men, women } = gender;
  const { Polo, Hoodie, Basic } = type;

  return (
    <Box>
      <SBox>
        <FormGroup>
          <CFormLabel sx={{ fontSize: "1.7rem", fontWeight: 700 }}>
            Color
          </CFormLabel>
          <FormControlLabel
            control={
              <Checkbox checked={red} name="red" onChange={handleColorChange} />
            }
            label="Red"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={blue}
                name="blue"
                onChange={handleColorChange}
              />
            }
            label="Blue"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={green}
                name="green"
                onChange={handleColorChange}
              />
            }
            label="Green"
          />
        </FormGroup>
      </SBox>
      <SBox>
        <CFormLabel sx={{ fontSize: "1.7rem", fontWeight: 700 }}>
          Gender
        </CFormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="men"
                checked={men}
                onChange={handleGenderChange}
              />
            }
            label="Men"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="women"
                checked={women}
                onChange={handleGenderChange}
              />
            }
            label="Women"
          />
        </FormGroup>
      </SBox>
      <SBox>
        <CFormLabel sx={{ fontSize: "1.7rem", fontWeight: 700 }}>
          Price
        </CFormLabel>

        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="0-Rs250" />
          <FormControlLabel control={<Checkbox />} label="Rs251-450" />
          <FormControlLabel control={<Checkbox />} label="Rs450" />
        </FormGroup>
      </SBox>
      <SBox>
        <CFormLabel sx={{ fontSize: "1.7rem", fontWeight: 700 }}>
          Type
        </CFormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="Polo"
                checked={Polo}
                onChange={handleTypeChange}
              />
            }
            label="Polo"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Hoodie"
                checked={Hoodie}
                onChange={handleTypeChange}
              />
            }
            label="Hoodie"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Basic"
                checked={Basic}
                onChange={handleTypeChange}
              />
            }
            label="Basic"
          />
        </FormGroup>
      </SBox>
    </Box>
  );
};

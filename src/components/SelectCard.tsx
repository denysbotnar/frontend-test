import styled from "@emotion/styled"
import { CardMedia, Grid } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Checkbox from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography"
import { FC, useCallback, useEffect, useState } from "react"

const checkBoxLabel = { inputProps: { "aria-label": "Checkbox demo" } }

interface SelectCardProps {
  selected?: boolean
  label?: string
  image?: string
  onSelect?: (status: boolean) => void
}

const SelectCard: FC<SelectCardProps> = ({ selected = false, label = "", image = "", onSelect }) => {
  const [checked, setChecked] = useState<boolean>(selected)

  useEffect(() => {
    if (!onSelect) return

    onSelect(checked)
  }, [checked, onSelect])

  const onChecked = useCallback(() => setChecked((prevState) => !prevState), [])

  return (
    <StyledCard selected={selected}>
      <CardMedia component="img" alt="random" height="100" width="229" image={image} />
      <CardContent>
        <Grid container>
          <Grid item>
            <Checkbox {...checkBoxLabel} checked={checked} onChange={onChecked} />
          </Grid>
          <Grid item>
            <Typography variant="body2">{label}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  )
}

export default SelectCard

interface CardProps {
  selected?: boolean
}

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "selected"
})<CardProps>(({ selected }) => ({
  maxWidth: 345,
  width: "229px",
  height: "150px",
  borderRadius: "10px",
  marginBottom: "20px",
  boxSizing: "border-box",
  cursor: "pointer",

  boxShadow: selected ? "0px 0px 0px 2px #65E9D9" : "none",
  border: selected ? "1px solid #3D8479" : "",

  ":hover": {
    boxShadow: "0px 0px 0px 2px #65E9D9"
  },

  "& .Mui-checked": {
    color: "#21B6A8"
  },

  "& .MuiCheckbox-root": {
    padding: "0px !important",
    marginRight: "10px",

    "& .MuiSvgIcon-root": {
      height: "20px",
      width: "20px"
    }
  }
}))

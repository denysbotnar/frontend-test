import styled from "@emotion/styled"
import { CardMedia, Grid } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Checkbox from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography"
import { FC, useCallback, useEffect, useState } from "react"
import { CardState } from "../shared/types"

const checkBoxLabel = { inputProps: { "aria-label": "Checkbox demo" } }

interface SelectCardProps {
  cardState?: CardState
  label?: string
  image?: string
  onSelect?: (status: boolean) => void
}

const SelectCard: FC<SelectCardProps> = ({ cardState = CardState.UNSELECTED, label = "", image = "", onSelect }) => {
  const [checked, setChecked] = useState<boolean>(cardState === CardState.SELECTED)

  useEffect(() => {
    if (!onSelect) return

    onSelect(checked)
  }, [checked, onSelect])

  const onChecked = useCallback(() => setChecked((prevState) => !prevState), [])

  return (
    <StyledCard cardState={cardState}>
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
  cardState?: CardState
}

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "cardState"
})<CardProps>(({ cardState }) => {
  const showShadow = cardState === CardState.SELECTED || cardState === CardState.HOVER
  const showBorder = cardState === CardState.SELECTED

  return {
    maxWidth: 345,
    width: "229px",
    height: "150px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxSizing: "border-box",
    cursor: "pointer",

    boxShadow: showShadow ? "0px 0px 0px 2px #65E9D9" : "",
    border: showBorder ? "1px solid #3D8479" : "",

    "& .Mui-checked": {
      color: "#21B6A8",
    },

    "& .MuiCheckbox-root": {
      padding: "0px !important",
      marginRight: "10px",

      "& .MuiSvgIcon-root": {
        height: "20px",
        width: "20px"
      }
    }
  }
})

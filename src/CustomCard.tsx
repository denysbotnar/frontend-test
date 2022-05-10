import styled from "@emotion/styled"
import { CardMedia, Grid } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Checkbox from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography"
import { ComponentType, FC, useCallback, useEffect, useState } from "react"

const checkBoxLabel = { inputProps: { "aria-label": "Checkbox demo" } }

interface Props {
  initialState?: boolean
  label?: string
  mediaContent?: string
  checkStatus?: (status: boolean) => void
}

const CustomCard: FC<Props> = ({ initialState = false, label = "", mediaContent = "", checkStatus }) => {
  const [checked, setChecked] = useState<boolean>(initialState)

  useEffect(() => {
    if (!checkStatus) return

    checkStatus(checked)
  }, [checked, checkStatus])

  const onChecked = useCallback(() => setChecked((prevState) => !prevState), [])

  return (
    <StyledCard selected={checked}>
      <CardMedia component="img" alt="random" height="100" width="229" image={mediaContent} />
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

export default CustomCard

interface CardProps {
  selected?: boolean
}

const StyledCard = styled<ComponentType<CardProps>>(Card)(({ selected }) => ({
  maxWidth: 345,
  width: "229px",
  height: "150px",
  borderRadius: "10px",
  marginBottom: "20px",
  boxSizing: "border-box",

  boxShadow: selected ? "0px 0px 0px 2px #65E9D9" : "",
  border: selected ? "0.5px solid #3D8479" : "",

  ":hover": {
    boxShadow: "0px 0px 0px 2px #65E9D9",
    cursor: "pointer"
  },

  "& .MuiCheckbox-root": {
    padding: "0px !important",
    marginRight: "10px"
  }
}))

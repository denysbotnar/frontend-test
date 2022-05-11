import { ComponentStory, Meta } from "@storybook/react"
import logo from "../assets/card_media_view.png"
import SelectCard from "../components/SelectCard"
import CustomMDXDocumentation from "../shared/SelectCard.mdx"
import { CardState } from "../shared/types"

export default {
  component: SelectCard,
  title: "SelectCard",
  argTypes: {
    backgroundColor: { control: "color" }
  },
  parameters: {
    docs: {
      page: CustomMDXDocumentation
    }
  }
} as Meta

const Template: ComponentStory<typeof SelectCard> = (args: any) => <SelectCard {...args} />

export const Selected = Template.bind({})
Selected.args = {
  cardState: CardState.SELECTED,
  label: "Flood zone 3",
  image: logo
}

export const Hover = Template.bind({})
Hover.args = {
  cardState: CardState.HOVER,
  label: "Flood zone 3",
  image: logo
}

export const Unselected = Template.bind({})
Unselected.args = {
  cardState: CardState.UNSELECTED,
  label: "Flood zone 3",
  image: logo
}

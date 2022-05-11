import { ComponentStory, Meta } from "@storybook/react"
import logo from "../assets/card_media_view.png"
import SelectCard from "../components/SelectCard"
import CustomMDXDocumentation from "../shared/SelectCard.mdx"

export default {
  component: SelectCard,
  title: "SelectCard",
  argTypes: {
    backgroundColor: { control: "#E5E5E5" }
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
  selected: true,
  label: "Flood zone 3",
  image: logo
}

export const Hover = Template.bind({})
Hover.args = {
  selected: false,
  label: "Flood zone 3",
  image: logo
}

export const Unselected = Template.bind({})
Unselected.args = {
  selected: false,
  label: "Flood zone 3",
  image: logo
}

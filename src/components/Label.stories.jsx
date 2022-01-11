import React from 'react'
import { Label } from './Label'

export default {
  title: 'Label/LabelText',
  component: Label
}

export const WithLabel = () => <label for="" class="textbox">Label: <input type="text" class='textbox'></input></label>
export const WithoutLabel = () => <label for="" class="textbox"><input type="text" class='textbox'></input></label>
export const WithPlaceholder = () => <label for="" class="textbox"><input type="text" class='textbox' placeholder="Enter the details"></input></label>



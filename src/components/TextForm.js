import React from 'react'

export default function TextForm() {
  return (
    <div>
      <div className='t1'>
        <label for="text" class="form-label">Example TextArea</label>
        <textarea id='ta1' rows="3"></textarea>
      </div>
      <button className='btn-case'>Convert To Uppercase</button>
    </div>
  )
}

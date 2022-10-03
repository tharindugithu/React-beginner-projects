import React from "react";

export default function Form() {
    const [form, setForm] = React.useState({
        fname: '',
        lname: '',
        email: '',
        isFriendly: true,
        employment: '',
        favColor: ''
    })

    console.log(form.favColor)
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setForm(prevForm => {
            return {
                ...prevForm,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(form)
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name='fname'
                value={form.fname}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name='lname'
                value={form.lname}

            />
            <br />
            <br />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name='email'
                value={form.email}
            />
            <br />
            <br />
            <input
                type="checkbox"
                name="isFriendly"
                id="isFriendly"
                checked={form.isFriendly}
                onChange={handleChange}
            />

            <label
                htmlFor="isFriendly">
                Are you Friendly
            </label>
            <br />
            <br />
            <fieldset>
                <legend>Current employment status</legend>

                <input type="radio" name="employment" id="unemployed" value='unemploye' onChange={handleChange} />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                <input type="radio" name="employment" id="parttime" value='parttime' onChange={handleChange} />
                <label htmlFor="parttime">Part-time</label>
                <br />
                <input type="radio" name="employment" id="fulltime" value='fulltime' onChange={handleChange} />
                <label htmlFor="fulltime">Full-time</label>
            </fieldset>

            <label htmlFor="">What is your favourite color</label>
            <br />
            <br />
            <select
                name="favColor"
                id="favColor"
                value={form.favColor}
                onChange={handleChange}
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
            </select>
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}
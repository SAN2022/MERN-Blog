import axios from 'axios'
import { useState } from 'react'

export default function Form(){
    const [formValues, setFormValues] = useState({
        title: '',
        content: '',
        author: '',
        image: '',
        // category: '',
    })

    const handleOnChange = (e) =>{
        setFormValues({
          ...formValues, [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async () => {
        try{
            const res = await axios.post('http://localhost:8000/api/posts', formValues)
            console.log(res.data)
        }
        catch(err){
            console.log(err.message)
        }
    }
    return (
        <>
            <div>
                <input type="text" placeholder="Image Link" value={formValues.image} onChange={(e)=>handleOnChange(e)} name='image'/><br />
                <input type="text" placeholder="Title" value={formValues.title} onChange={(e)=>handleOnChange(e)} name='title'/><br />
                <input type="text" placeholder="Content" value={formValues.content} onChange={(e)=>handleOnChange(e)} name='content'/><br />
                {/* <select onChange={(e)=>handleOnChange(e)} value={formValues.category} name='category'> 
                    <option value="">Choose option</option>
                    <option value="Programming">Programming</option>
                    <option value="Database">Database</option>
                    <option value="Framework">Framework</option>
                    <option value="API">API</option>
                    <option value="JavaScript">JavaScript</option>
                </select><br /> */}
                <select onChange={(e)=>handleOnChange(e)} value={formValues.author} name='author'>
                    <option value="">Select One</option>
                    <option value="Jane Doe">Jane Doe</option>
                    <option value="John Smith">John Smith</option>
                </select>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}
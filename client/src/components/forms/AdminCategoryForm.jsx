import { useState } from "react";

export function AdminCategoryForm() {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('draft');
    
    function handleFormSubmit(e) {
        e.preventDefault();
       
        fetch('http://localhost:5519/api/admin/categories', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                title,
                url,
                description,
                status
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })
            .catch(console.error)
    }
    

    return (
        <form onSubmit={handleFormSubmit} className="col-12 col-md-9 col-lg-6">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input onChange={e => setTitle(e.target.value)} value={title} type="text" className="form-control" id="title" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="url" className="form-label">Url slug</label>
                <input onChange={e => setUrl(e.target.value)} value={url} type="text" className="form-control" id="url" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea onChange={e => setDescription(e.target.value)} value={description} className="form-control" id="description"></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Status</label>
                <div className="form-check">
                    <input onChange={() => setStatus('published')} 
                    checked={status === 'published' ? 'cheked' : ''}
                    type="radio" name="radios" className="form-check-input" id="status_published" required/>
                    <label className="form-check-label" htmlFor="status_published">Published</label>
                </div>
                <div className="form-check">
                    <input onChange={() => setStatus('draft')} 
                    checked={status === 'draft' ? 'cheked' : ''}
                    type="radio" name="radios" className="form-check-input" id="status_draft" required/>
                    <label className="htmlForm-check-label" htmlFor="status_draft">Draft</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
}
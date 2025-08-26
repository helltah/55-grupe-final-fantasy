import { Link } from "react-router";

export function AdminMoviesTable() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">                           
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Thumbnail</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>           
                                <tr>
                                    <th scope="row">5</th>
                                    <td><img to="/img/movies/interstellar.jpg" alt="Movie thumbnail" style={{maxHeight: '4rem'}}/></td>
                                    <td><Link to="/admin/movies/interstellar">Interstellar</Link></td>
                                    <td><span className="badge text-bg-success">Provided</span></td>
                                    <td>2 hours 49minutes</td>
                                    <td>Adventure</td>
                                    <td><span className="badge text-bg-success">Published</span></td>
                                    <td>
                                        <div className="d-flex gap-3">
                                            <Link className="btn btn-primary btn-sm" to="/admin/movies/interstellar/edit">Edit</Link>
                                            <button data-url="interstellar" className="btn btn-danger btn-sm">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td><img to="/img/movies/matrix.jpg" alt="Movie thumbnail" style={{maxHeight: '4rem'}}/></td>
                                    <td><Link to="/admin/movies/matrix">Matrix</Link></td>
                                    <td><span className="badge text-bg-success">Provided</span></td>
                                    <td>2 hours 16minutes</td>
                                    <td>Action</td>
                                    <td><span className="badge text-bg-success">Published</span></td>
                                    <td>
                                        <div className="d-flex gap-3">
                                            <Link className="btn btn-primary btn-sm" to="/admin/movies/matrix/edit">Edit</Link>
                                            <button data-url="matrix" className="btn btn-danger btn-sm">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
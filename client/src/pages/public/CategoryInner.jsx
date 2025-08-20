import { PublicPageTitle } from '../../components/PublicPageTitle';
import { MovieCard } from '../../components/MovieCard';

export function CategoryInnerPage() {
    const moviesData = [{}, {}, {}];
    return (
        <main className='min-page-height'>
            <PublicPageTitle title='{{Category title}}' />

            <div>MOVIES FILTER</div>

            <div className="container">
                <div className="row">
                    {moviesData.map((movie, index) => <MovieCard key={index} mvoie={movie} />)}   
                </div>
            </div>
        </main>
    );
}

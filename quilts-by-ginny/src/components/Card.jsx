export function Card({src, alt}) {
    return (
        <div className="flexbox-item card">
            <div className="center">
                <a href="https://www.facebook.com/groups/164614630630335" target="_blank" rel="noreferrer">
                    <img className="thumbnail" src={src} alt={alt} width="300px" />
                </a>
            </div>
        </div>
    )
}
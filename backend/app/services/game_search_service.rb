class GameSearchService
  def initialize(query, genre, platform)
    @query = query
    @genre = genre
    @platform = platform
  end

  def search
    games = Game.all

    games = filter_by_title(games, @query) if @query.present?
    games = filter_by_genre(games, @genre) if @genre.present?
    games = filter_by_platform(games, @platform) if @platform.present?

    games
  end

  private

  def filter_by_title(games, query)
    games = games.where('title LIKE ?', "%#{query}%") if query.present?
    games
  end

  def filter_by_genre(games, genre)
    games = games.where(genre: genre) if genre.present?
    games
  end

  def filter_by_platform(games, platform)
    games = games.where(platform: platform) if platform.present?
    games
  end
end
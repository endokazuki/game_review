class GamesController < ApplicationController
  def search
    query = params[:title]
    genre = params[:genre]
    platform = params[:platform]

    game_search_service = GameSearchService.new(query, genre, platform)
    results = game_search_service.search

    render json: results
  end
end
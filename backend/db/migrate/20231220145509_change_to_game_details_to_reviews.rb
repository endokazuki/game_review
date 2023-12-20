class ChangeToGameDetailsToReviews < ActiveRecord::Migration[7.0]
  def change
    rename_table :game_details, :reviews
  end
end

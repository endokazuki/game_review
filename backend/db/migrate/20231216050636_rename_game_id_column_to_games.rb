class RenameGameIdColumnToGames < ActiveRecord::Migration[7.0]
  def change
    rename_column :games, :game_id, :app_id
  end
end

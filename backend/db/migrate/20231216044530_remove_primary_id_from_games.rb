class RemovePrimaryIdFromGames < ActiveRecord::Migration[7.0]
  def change
    remove_column :games, :primary_key, :string
  end
end

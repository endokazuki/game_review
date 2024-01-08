class CreateDropGenres < ActiveRecord::Migration[7.0]
  def change
    drop_table :genres do |t|
    end
  end
end

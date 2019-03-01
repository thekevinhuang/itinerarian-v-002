class Itinerary < ActiveRecord::Base
    belongs_to :user
    has_many :itin_dates
end
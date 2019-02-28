class ItinerarySerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :user_id
    belongs_to :user, include: :all
end
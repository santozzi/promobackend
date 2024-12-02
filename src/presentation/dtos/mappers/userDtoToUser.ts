import UserEntity from "../../../domain/entities/user.entity";
import { UserDto } from "../user.dto";

export const userDtoToUser = (userDto:UserDto) => {
     return new UserEntity(
        userDto.name.first,
        userDto.name.last,
        userDto.email,
        userDto.phone,
        userDto.picture.large,
        userDto.gender,
        userDto.location.country,
        userDto.location.state,
        userDto.location.city,
        userDto.login.username,
        userDto.login.password,
        userDto.login.salt,
        
     );
}

export const userToUserDto = (user:UserEntity) => {
    return new UserDto(
        user.getGender(),
        {
            first:user.getName(),
            last:user.getLastName()
        },   
        {
            country:user.getCountry(),
            city:user.getCity(),
            state:user.getState()
        },
        user.getEmail(),
        {
            username:user.getUsername(),
            password:user.getPassword(),
            salt:user.getRole()
        },
        user.getPhone(),
        {
            value:user.getId().toString()
        },
        {
            large:user.getAvatar()
        },
        
    );
}
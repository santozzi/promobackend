export interface UserDto {
    gender:   string;
    name:     Name;
    location: Location;
    email:    string;
    login:    Login;
    phone:    string;
    id:       ID;
    picture:  Picture;
}

export interface ID {
    value: string;
}

export interface Location {
    city:  string;
    state: string;
}

export interface Login {
    username: string;
    password: string;
}

export interface Name {
    first: string;
    last:  string;
}

export interface Picture {
    large:     string;
    medium:    string;
    thumbnail: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toUserDto(json: string): UserDto {
        return JSON.parse(json);
    }

    public static userDtoToJson(value: UserDto): string {
        return JSON.stringify(value);
    }
}
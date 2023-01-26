package steps.login;

public enum LoginUsernameEnums {
    standard("standard_user"),
    locked("locked_out_user"),
    problem("problem_user"),
    performance("performance_glitch_user");

    public final String value;

    private LoginUsernameEnums(String value) {
        this.value = value;
    }
}

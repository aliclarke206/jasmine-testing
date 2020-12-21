describe ("calculator", function(){
    describe("addition tests", function(){
        it ("should return 42", function(){
            expect(addition(20, 22)).toBe(42);
        });
        it("should return 26", function(){
            expect(addition(19, 7)).toBe(26);
        });
        it("should return error if we dont supply two numbers", function(){
            spyOn(window, "alert");
            addition("Hitchhikers", "Guide");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});
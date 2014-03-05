
  (1..500).each do |a|
    (1..500).each do |b|
      (1..500).each do |c|
        if a**2 + b**2 == c**2 && (a + b + c) == 1000
          puts a
          puts b
          puts c
        end
      end
    end
  end
angular.module('budgetApp', [])
  .controller('BudgetController', ['$scope', function($scope) {

    $scope.expenses = [];

    $scope.addExpense = function() {
      if (!$scope.expense || !$scope.expense.name || !$scope.expense.amount) return;

      $scope.expenses.push({
        name: $scope.expense.name,
        amount: parseFloat($scope.expense.amount),
        category: $scope.expense.category || '-',
        dueDate: $scope.expense.dueDate || '-',
        notes: $scope.expense.notes || '-'
      });

      $scope.expense = {};
    };

    $scope.getTotal = function() {
      return $scope.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    };

  }]);

